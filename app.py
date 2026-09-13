import streamlit as st
import re

st.set_page_config(layout="wide", initial_sidebar_state="collapsed")

# Inject custom CSS to remove Streamlit's default padding and make the iframe full screen
st.markdown("""
<style>
    /* Hide Streamlit header and footer */
    header {visibility: hidden;}
    footer {visibility: hidden;}
    
    /* Remove padding from the main block container */
    .block-container {
        padding: 0 !important;
        max-width: 100% !important;
    }
    
    /* Make the iframe take up the full viewport height */
    iframe {
        height: 100vh !important;
        width: 100vw !important;
        border: none !important;
        display: block;
    }
</style>
""", unsafe_allow_html=True)

with open("index.html", "r", encoding="utf-8") as f:
  html_data = f.read()

with open("style.css", "r", encoding="utf-8") as f:
  css_data = f.read()

with open("app.js", "r", encoding="utf-8") as f:
  js_data = f.read()

# Inject CSS and JS directly into the HTML
html_data = html_data.replace('<link rel="stylesheet" href="style.css">', f'<style>{css_data}</style>')
html_data = html_data.replace('<script src="app.js"></script>', f'<script>{js_data}</script>')

st.components.v1.html(html_data, scrolling=True)