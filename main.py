import os
import pathlib

BASE_DIR = os.path.abspath(os.path.dirname(__file__))


def parse_pages(pages: list[str]) -> str:
    html = ''
    for page in pages:
        html += "<li><a href='{}'>{}</a></li>".format(page, page)
    return html


def update():
    path = os.path.join(BASE_DIR, 'pages')
    pages = []
    for page in os.listdir(path):
        if page == 'index.html':
            continue
        extension = pathlib.Path(os.path.join(path, page)).suffix
        if extension == '.html':
            pages.append(page)
            print(page)
    index = """
        <!DOCTYPE html>
        <html lang="en">

        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>My Library</title>
        </head>

        <body>
            <h1>My Library</h1>
            <ul>{}</ul>
        </body>

        </html>
    """.format(
        parse_pages(pages)
    )
    with open(os.path.join(BASE_DIR, 'pages', 'index.html'), 'w') as f:
        f.write(index)


if __name__ == '__main__':

    update()
