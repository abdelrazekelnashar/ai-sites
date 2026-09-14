import streamlit as st
import re
import os

st.set_page_config(layout="wide", initial_sidebar_state="collapsed")

# Inject custom CSS to remove Streamlit's default padding and make the iframe full screen
st.markdown("""
<style>
    /* Hide Streamlit header (toolbar) and footer */
    header[data-testid="stHeader"] {display: none !important;}
    footer {display: none !important;}
    
    /* Remove padding from the main block container */
    [data-testid="stMainBlockContainer"] {
        padding: 0 !important;
        max-width: 100% !important;
    }
    .block-container {
        padding-top: 0 !important;
        padding-bottom: 0 !important;
        padding-left: 0 !important;
        padding-right: 0 !important;
        max-width: 100% !important;
    }
    
    /* Ensure the iframe fills the entire screen */
    iframe {
        height: 100vh !important;
        width: 100vw !important;
        border: none !important;
        display: block !important;
        margin: 0 !important;
        padding: 0 !important;
    }
    
    /* Hide Streamlit's default margins */
    .stApp {
        margin: 0 !important;
        padding: 0 !important;
    }
</style>
""", unsafe_allow_html=True)

current_dir = os.path.dirname(os.path.abspath(__file__))

with open(os.path.join(current_dir, "index.html"), "r", encoding="utf-8") as f:
  html_data = f.read()

with open(os.path.join(current_dir, "style.css"), "r", encoding="utf-8") as f:
  css_data = f.read()

with open(os.path.join(current_dir, "app.js"), "r", encoding="utf-8") as f:
  js_data = f.read()

# Inject CSS and JS directly into the HTML
html_data = html_data.replace('<link rel="stylesheet" href="style.css">', f'<style>{css_data}</style>')
html_data = html_data.replace('<script src="app.js"></script>', f'<script>{js_data}</script>')

st.components.v1.html(html_data, scrolling=True)