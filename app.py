import streamlit as st
import re

st.set_page_config(layout="wide")

with open("index.html", "r", encoding="utf-8") as f:
  html_data = f.read()

with open("style.css", "r", encoding="utf-8") as f:
  css_data = f.read()

with open("app.js", "r", encoding="utf-8") as f:
  js_data = f.read()

# Inject CSS and JS directly into the HTML
html_data = html_data.replace('<link rel="stylesheet" href="style.css">', f'<style>{css_data}</style>')
html_data = html_data.replace('<script src="app.js"></script>', f'<script>{js_data}</script>')

st.components.v1.html(html_data, height=900, scrolling=True)