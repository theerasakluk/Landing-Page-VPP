import subprocess
from pathlib import Path
import shutil

from PIL import Image


SOURCE = Path(
    r"C:\Users\Theerasak\.codex\generated_images\019f6001-368c-78a2-b0c6-0a3252a07e15\call_g9qzc9Afp9lT76XSl31kWAWr.png"
)
PYTHON = Path(r"C:\Users\Theerasak\.cache\codex-runtimes\codex-primary-runtime\dependencies\python\python.exe")
REMOVE_CHROMA_KEY = Path(
    r"C:\Users\Theerasak\.codex\skills\.system\imagegen\scripts\remove_chroma_key.py"
)
OUT_DIR = Path("public/categories")
OUT_DIR.mkdir(parents=True, exist_ok=True)

NAMES = [
    "category-office-supplies.png",
    "category-office-electronics.png",
    "category-office-furniture.png",
    "category-tools-equipment.png",
    "category-pantry-cleaning.png",
    "category-stationery-paper.png",
    "category-computer-it.png",
    "category-solar-rooftop.png",
]


def fit_to_canvas(image: Image.Image, size=(720, 520), pad=28) -> Image.Image:
    alpha = image.getchannel("A")
    bbox = alpha.point(lambda p: 255 if p > 10 else 0).getbbox()
    if bbox:
        left, top, right, bottom = bbox
        left = max(0, left - pad)
        top = max(0, top - pad)
        right = min(image.width, right + pad)
        bottom = min(image.height, bottom + pad)
        image = image.crop((left, top, right, bottom))

    canvas_w, canvas_h = size
    scale = min((canvas_w - 28) / image.width, (canvas_h - 28) / image.height)
    new_size = (max(1, int(image.width * scale)), max(1, int(image.height * scale)))
    resized = image.resize(new_size, Image.Resampling.LANCZOS)
    canvas = Image.new("RGBA", size, (255, 255, 255, 0))
    canvas.alpha_composite(
        resized,
        ((canvas_w - new_size[0]) // 2, (canvas_h - new_size[1]) // 2),
    )
    return canvas


def main() -> None:
    shutil.copy2(SOURCE, OUT_DIR / "category-sprite-source.png")
    transparent_sheet = OUT_DIR / "category-sprite-transparent.png"
    subprocess.run(
        [
            str(PYTHON),
            str(REMOVE_CHROMA_KEY),
            "--input",
            str(SOURCE),
            "--out",
            str(transparent_sheet),
            "--key-color",
            "#ff00ff",
            "--soft-matte",
            "--transparent-threshold",
            "24",
            "--opaque-threshold",
            "190",
            "--edge-contract",
            "1",
            "--despill",
            "--force",
        ],
        check=True,
    )

    sheet = Image.open(transparent_sheet).convert("RGBA")
    tile_w = sheet.width // 4
    tile_h = sheet.height // 2

    for index, name in enumerate(NAMES):
        col = index % 4
        row = index // 4
        tile = sheet.crop((col * tile_w, row * tile_h, (col + 1) * tile_w, (row + 1) * tile_h))
        final = fit_to_canvas(tile)
        final.save(OUT_DIR / name)
        final.save(Path("public") / name)


if __name__ == "__main__":
    main()
