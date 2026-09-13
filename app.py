import streamlit as st

st.set_page_config(layout="wide")

with open("index.html", "r", encoding="utf-8") as f:
  html_data = f.read()

st.components.v1.html(html_data, height=900, scrolling=True)