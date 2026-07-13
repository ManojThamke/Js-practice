import requests
from bs4 import BeautifulSoup

def decode_secret_message(url):
    # Fetch document
    response = requests.get(url)
    response.raise_for_status()

    # Parse HTML
    soup = BeautifulSoup(response.text, "html.parser")

    points = {}
    max_x = 0
    max_y = 0

    # Extract rows from table
    rows = soup.find_all("tr")

    for row in rows[1:]:  # Skip header row
        cols = row.find_all("td")

        if len(cols) != 3:
            continue

        try:
            x = int(cols[0].get_text(strip=True))
            char = cols[1].get_text(strip=True)
            y = int(cols[2].get_text(strip=True))

            points[(x, y)] = char

            max_x = max(max_x, x)
            max_y = max(max_y, y)

        except ValueError:
            continue

    # Print grid from top to bottom
    for y in range(max_y, -1, -1):
        row = ""
        for x in range(max_x + 1):
            row += points.get((x, y), " ")
        print(row)


# Example usage
decode_secret_message(
    "https://docs.google.com/document/d/e/2PACX-1vSvM5gDlNvt7npYHhp_XfsJvuntUhq184By5xO_pA4b_gCWeXb6dM6ZxwN8rE6S4ghUsCj2VKR21oEP/pub"
)