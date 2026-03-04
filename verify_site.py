from playwright.sync_api import sync_playwright

def run():
    with sync_playwright() as p:
        browser = p.chromium.launch(headless=True)
        page = browser.new_page()

        # Block external resources (fonts, images) to avoid timeouts
        page.route("**/*", lambda route: route.abort() if route.request.resource_type in ["image", "font", "media"] else route.continue_())

        page.goto("http://localhost:8000/index.html", wait_until="domcontentloaded")
        page.screenshot(path="verification.png", full_page=True)
        browser.close()

if __name__ == "__main__":
    run()
