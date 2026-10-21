# Junlang Liu's personal website

This website uses the repository's original Academic Pages / Minimal Mistakes template. The original layouts, styles, sidebar, and responsive navigation are retained.

## Content

- `_pages/about.md`: biography and research interests.
- `_pages/research.md`: research directions.
- `_data/publications.json`: selected public journal articles and preprints.
- `_pages/publications.html`: publication list in the original archive layout.
- `_pages/talks.html`: presentations.
- `_pages/teaching.html`: teaching and mentorship.
- `_pages/cv.md`: background, education, honors, and service; this is an extracted profile, not a downloadable CV.
- `_config.yml`: sidebar, contact details, social profiles, and build exclusions.
- `_data/navigation.yml`: navigation.

## Build and hosting

The pull request workflow builds the original Jekyll template with `actions/jekyll-build-pages` and saves a GitHub Pages artifact. Only master builds are eligible for deployment. GitHub Pages should use GitHub Actions as its source when the site is ready to publish.

For local development with Ruby and Bundler installed:

```sh
bundle install
bundle exec jekyll serve
```

The supplied CV PDF and other private source documents are not included in this repository or the built website. Sample template content, `files/`, and PDF/DOCX files are excluded from the public build. Publications with Guosong Hong or Gengfeng Zheng are omitted from the selected research publications. Current appointment details remain to be supplied.

## Theme

[Academic Pages](https://github.com/academicpages/academicpages.github.io), based on [Minimal Mistakes](https://github.com/mmistakes/minimal-mistakes).
