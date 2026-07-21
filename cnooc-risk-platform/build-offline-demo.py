"""Build a single-file, offline-safe version of the static demo."""

from pathlib import Path

ROOT = Path(__file__).parent
html = (ROOT / "index.html").read_text(encoding="utf-8")
css = (ROOT / "css" / "styles.css").read_text(encoding="utf-8")
data = (ROOT / "js" / "data.js").read_text(encoding="utf-8")
app = (ROOT / "js" / "app.js").read_text(encoding="utf-8")

html = html.replace(
    '<link rel="stylesheet" href="css/styles.css">',
    f"<style>\n{css}\n</style>",
)
html = html.replace(
    '  <script src="js/data.js"></script>\n  <script src="js/app.js"></script>',
    f"  <script>\n{data}\n</script>\n  <script>\n{app}\n</script>",
)
html = html.replace(
    "<title>集团穿透式监管平台</title>",
    "<title>集团穿透式监管平台（离线演示版）</title>",
)

(ROOT / "offline-demo.html").write_text(html, encoding="utf-8")
