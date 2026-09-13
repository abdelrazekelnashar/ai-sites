const STORAGE_KEY = 'ai-bookmarks-v4';

const CATEGORIES = [
    "ABC",
    "Chatbots",
    "Image Generation",
    "Development",
    "Research",
    "Audio/Video",
    "Productivity",
    "Writing",
    "Geo / Maps",
    "Search / Discovery",
    "Automation",
    "API Providers",
    "Local AI",
    "AI Software",
    "Autonomous Agents",
    "Skills",
    "Other"
];

const PRELOADED_LINKS = [
    { title: "Gemini", url: "https://gemini.google.com/app", company: "Google", category: "ABC" },
    { title: "Copilot", url: "https://copilot.microsoft.com/", company: "Microsoft", category: "ABC" },
    { title: "ChatGPT", url: "https://chatgpt.com/", company: "OpenAI", category: "ABC" },
    { title: "Claude", url: "https://claude.ai/new", company: "Anthropic", category: "ABC" },
    { title: "Grok", url: "https://grok.com/", company: "xAI", category: "ABC" },
    { title: "DeepSeek", url: "https://chat.deepseek.com/", company: "DeepSeek", category: "ABC" },
    { title: "Qwen", url: "https://chat.qwen.ai/", company: "Qwen", category: "ABC" },
    { title: "GLM", url: "https://z.ai/chat", company: "GLM", category: "ABC" },
	{ title: "KIMI", url: "https://www.kimi.ai/en", company: "KIMI", category: "ABC" },
    { title: "Poe", url: "https://poe.com/", company: "Poe", category: "ABC" },
    { title: "Perplexity", url: "https://www.perplexity.ai/", company: "Perplexity", category: "ABC" },
    { title: "Llama", url: "https://llamacoder.together.ai/", company: "Llama", category: "ABC" },
    { title: "HuggingChat", url: "https://huggingface.co/chat/", company: "HuggingChat", category: "ABC" },
    { title: "Google Notebook", url: "https://notebook.google.com/", company: "Google", category: "ABC" },
    { title: "Gemini", url: "https://bard.google.com/", company: "Google", category: "Chatbots" },
    { title: "Copilot", url: "https://copilot.microsoft.com/", company: "Microsoft", category: "Chatbots" },
    { title: "ChatGPT", url: "https://chatgpt.com/", company: "OpenAI", category: "Chatbots" },
    { title: "Claude", url: "https://claude.ai/new", company: "Anthropic", category: "Chatbots" },
    { title: "Code Wiki", url: "https://codewiki.google/", company: "Google", category: "Development" },
    { title: "NotebookLM", url: "https://notebooklm.google.com/", company: "Google", category: "Research" },
    { title: "Consensus", url: "https://consensus.app/", company: "Consensus", category: "Research" },
    { title: "grok", url: "https://grok.com/", company: "xAI", category: "Chatbots" },
    { title: "Z", url: "https://z.ai/chat", company: "Z", category: "Chatbots" },
    { title: "Design Arena", url: "https://www.designarena.ai/", company: "Design Arena", category: "Image Generation" },
    { title: "Jenni", url: "https://app.jenni.ai/editor/", company: "Jenni", category: "Writing" },
    { title: "ExploreScience", url: "https://explorescience.ai/", company: "ExploreScience", category: "Writing" },
    { title: "WebLLM", url: "https://chat.webllm.ai/", company: "WebLLM", category: "Chatbots" },
    { title: "OpenRouter", url: "https://openrouter.ai/", company: "OpenRouter", category: "API Providers" },
    { title: "Artificial Analysis", url: "https://artificialanalysis.ai/", company: "Artificial Analysis", category: "Research" },
    { title: "Cerebras", url: "https://chat.cerebras.ai/", company: "Cerebras", category: "Chatbots" },
    { title: "SCiNiTO - EKB", url: "https://ekb.scinito.ai/ai/chat/019c22dd57f4740f8a3fe38c3cdd769f", company: "SCiNiTO - EKB", category: "Research" },
    { title: "Prism LaTex AI", url: "https://prism.openai.com/", company: "Prism LaTex AI", category: "Writing" },
    { title: "Stunning", url: "https://stunning.so/", company: "Stunning", category: "Productivity" },
    { title: "Prompt Creator", url: "https://www.prompt-creator.ai/en/", company: "Prompt Creator", category: "Writing" },
    { title: "Google Opal", url: "https://developers.google.com/opal", company: "Google", category: "Productivity" },
    { title: "BlackBox", url: "https://app.blackbox.ai/", company: "BlackBox", category: "Development" },
    { title: "Google AI Studio", url: "https://aistudio.google.com/prompts/new_chat", company: "Google", category: "Development" },
    { title: "Stanford Agentic Reviewer", url: "https://paperreview.ai/", company: "Stanford", category: "Research" },
    { title: "Qwen", url: "https://chat.qwen.ai/", company: "Alibaba", category: "Chatbots" },
    { title: "CAT", url: "https://www.matecat.com/", company: "CAT", category: "Other" },
    { title: "NDAI", url: "https://app.notdiamond.ai/onboarding", company: "NDAI", category: "Productivity" },
    { title: "You", url: "https://you.com/", company: "You", category: "Search / Discovery" },
    { title: "Bing", url: "https://www.bing.com/", company: "Microsoft", category: "Search / Discovery" },
    { title: "DeepSeek", url: "https://chat.deepseek.com/", company: "DeepSeek", category: "Chatbots" },
    { title: "Nourva", url: "https://nourva.ai/dashboard/chat", company: "Nourva", category: "Chatbots" },
    { title: "Genspark", url: "https://www.genspark.ai/de", company: "genspark", category: "Chatbots" },
	{ title: "Duck", url: "https://duck.ai/", company: "Duck", category: "Chatbots" },
    { title: "Primers", url: "https://aman.ai/primers/ai/evaluation-metrics/", company: "Primers", category: "Research" },
    { title: "Unearth AI", url: "https://www.unearthinsights.com/", company: "Unearth AI", category: "Other" },
    { title: "Textomap", url: "https://www.textomap.com/", company: "Textomap", category: "Productivity" },
    { title: "OSM GPT", url: "https://osm-gpt.rohitgautam.com.np/", company: "OSM GPT", category: "Geo / Maps" },
    { title: "MapsGPT", url: "https://www.mapsgpt.com/", company: "MapsGPT", category: "Geo / Maps" },
    { title: "LetsView AI", url: "https://letsview.com/ai-tools", company: "LetsView AI", category: "Other" },
    { title: "Project IDX", url: "https://idx.dev/#introduction", company: "Google", category: "Development" },
    { title: "Araby", url: "https://www.araby.ai/ar", company: "Araby", category: "Writing" },
    { title: "Simplified", url: "https://simplified.com/", company: "Simplified", category: "Writing" },
    { title: "Katteb", url: "https://katteb.com/en/", company: "Katteb", category: "Writing" },
    { title: "Smodin", url: "https://smodin.io/", company: "Smodin", category: "Writing" },
    { title: "Mohtawa", url: "https://www.mohtawa.ae/", company: "Mohtawa", category: "Writing" },
    { title: "HIX.AI", url: "https://hix.ai/", company: "HIX.AI", category: "Writing" },
    { title: "Qalam", url: "https://qalam.ai/en", company: "Qalam", category: "Writing" },
    { title: "Themoonlight", url: "https://www.themoonlight.io/en", company: "themoonlight", category: "Writing" },
    { title: "CropGPT", url: "https://cropgpt.hsat.info/", company: "CropGPT", category: "Other" },
    { title: "Monta AI", url: "https://www.monta.ai/", company: "Monta AI", category: "Other" },
    { title: "PopAI", url: "https://www.popai.pro/", company: "PopAI", category: "Other" },
    { title: "LitMaps", url: "https://www.litmaps.com/", company: "LitMaps", category: "Other" },
    { title: "Llama Coder", url: "https://llamacoder.together.ai/", company: "Together AI", category: "Development" },
    { title: "AI Headshot Generator", url: "https://www.aragon.ai/", company: "AI Headshot Generator", category: "Image Generation" },
    { title: "Reels maker", url: "https://makereels.ai/en", company: "Reels maker", category: "Audio/Video" },
    { title: "Vidrush", url: "https://vidrush.ai/", company: "vidrush", category: "Audio/Video" },
    { title: "DeepSite", url: "https://enzostvs-deepsite.hf.space/projects/new", company: "DeepSite", category: "Other" },
    { title: "BibCit", url: "https://www.bibcit.com/en", company: "BibCit", category: "Other" },
    { title: "Ponder", url: "https://ponder.ing/", company: "Ponder", category: "Productivity" },
    { title: "OpenCode", url: "https://opencode.ai/", company: "OpenCode", category: "Autonomous Agents" },
    { title: "CaveMan", url: "https://github.com/juliusbrussee/caveman", company: "CaveMan", category: "Autonomous Agents" },
    { title: "PonyTail", url: "https://github.com/DietrichGebert/ponytail", company: "PonyTail", category: "Autonomous Agents" },
    { title: "Ruflo", url: "https://github.com/ruvnet/ruflo", company: "Ruflo", category: "Autonomous Agents" },
    { title: "FreeModel", url: "https://freemodel.dev/dashboard", company: "FreeModel", category: "Autonomous Agents" },
    { title: "Void", url: "https://voideditor.com/", company: "Void", category: "Development" },
    { title: "TRAE", url: "https://www.trae.ai/", company: "ByteDance", category: "Development" },
    { title: "VS Code", url: "https://code.visualstudio.com/", company: "Microsoft", category: "Development" },
    { title: "Antigravity", url: "https://antigravity.google/", company: "Google", category: "Development" },
    { title: "Poe", url: "https://poe.com/", company: "Quora", category: "Chatbots" },
    { title: "Perplexity", url: "https://www.perplexity.ai/", company: "Perplexity", category: "Search / Discovery" },
    { title: "SciSpace", url: "https://typeset.io/", company: "SciSpace", category: "Research" },
    { title: "Slide speak", url: "https://slidespeak.co/summarize-powerpoint-with-ai/", company: "Slide speak", category: "Productivity" },
    { title: "AI-Cowriter", url: "https://ai-cowriter.com/", company: "AI-Cowriter", category: "Writing" },
    { title: "Geobase", url: "https://geobase.app/blog/geoembeddings-private-beta", company: "Geobase", category: "Geo / Maps" },
    { title: "Adobe Firefly", url: "https://firefly.adobe.com/", company: "Adobe", category: "Image Generation" },
    { title: "Pixelly", url: "https://pixelly.ai/generate", company: "Pixelly", category: "Image Generation" },
    { title: "n8n", url: "https://n8n.io/", company: "n8n", category: "Automation" },
    { title: "Ecosia", url: "https://www.ecosia.org/", company: "Ecosia", category: "Search / Discovery" },
    { title: "AI-Writer", url: "https://ai-writer.com/", company: "AI-Writer", category: "Writing" },
    { title: "WriteGo", url: "https://writego.ai/", company: "WriteGo", category: "Writing" },
    { title: "AnswerThis", url: "https://answerthis.io/", company: "AnswerThis", category: "Productivity" },
    { title: "OpenRead", url: "https://www.openread.academy/", company: "OpenRead", category: "Research" },
    { title: "AI Chat | i10X", url: "https://i10x.ai/ai-chat", company: "AI Chat | i10X", category: "Chatbots" },
    { title: "CiteTrue", url: "https://citetrue.com/", company: "CiteTrue", category: "Research" },
    { title: "Gamma", url: "https://gamma.app/", company: "Gamma", category: "Productivity" },
    { title: "Notion", url: "https://app.notion.com/onboarding", company: "Notion", category: "Productivity" },
    { title: "ElevenLabs", url: "https://elevenlabs.io/", company: "ElevenLabs", category: "Audio/Video" },
    { title: "Kilo", url: "https://kilo.ai/", company: "Kilo", category: "Development" },
    { title: "ZeroClaw", url: "https://github.com/zeroclaw-labs/zeroclaw", company: "ZeroClaw", category: "Autonomous Agents" },
    { title: "AI by Hand", url: "https://www.byhand.ai/", company: "AI by Hand", category: "Other" },
    { title: "Midjourney", url: "https://www.midjourney.com/", company: "Midjourney", category: "Image Generation" },
    { title: "Runway", url: "https://runwayml.com/", company: "Runway", category: "Audio/Video" },
    { title: "Luma Dream Machine", url: "https://lumalabs.ai/dream-machine", company: "Luma Dream Machine", category: "Audio/Video" },
    { title: "Suno AI", url: "https://suno.com/", company: "Suno AI", category: "Audio/Video" },
    { title: "Udio", url: "https://www.udio.com/", company: "Udio", category: "Audio/Video" },
    { title: "Cursor", url: "https://www.cursor.com/", company: "Anysphere", category: "Development" },
    { title: "v0 by Vercel", url: "https://v0.dev/", company: "Vercel", category: "Development" },
    { title: "HeyGen", url: "https://www.heygen.com/", company: "HeyGen", category: "Audio/Video" },
    { title: "Hugging Face", url: "https://huggingface.co/", company: "Hugging Face", category: "Development" },
    { title: "NVIDIA NIM", url: "https://build.nvidia.com/", company: "NVIDIA", category: "API Providers" },
    { title: "Ollama", url: "https://ollama.com/", company: "Ollama", category: "Local AI" },
    { title: "AnythingLLM", url: "https://useanything.com/", company: "Mintplex Labs", category: "AI Software" },
    { title: "OpenWorker", url: "https://github.com/andrewyng/openworker", company: "OpenWorker", category: "AI Software" },
    { title: "LM Studio", url: "https://lmstudio.ai/", company: "LM Studio", category: "Local AI" },
    { title: "GPT4All", url: "https://gpt4all.io/", company: "Nomic", category: "Local AI" },
    { title: "Jan", url: "https://jan.ai/", company: "Jan", category: "Local AI" },
    { title: "Dify", url: "https://dify.ai/", company: "Dify", category: "AI Software" },
    { title: "Flowise", url: "https://flowiseai.com/", company: "Flowise", category: "AI Software" },
    { title: "Chatbox", url: "https://chatboxai.app/", company: "Chatbox", category: "AI Software" },
    { title: "GoogleAppInstaller", url: "https://search.google/google-app/desktop/", company: "Google", category: "AI Software" },
    { title: "Groq", url: "https://groq.com/", company: "Groq", category: "API Providers" },
    { title: "Together AI", url: "https://www.together.ai/", company: "Together AI", category: "API Providers" },
    { title: "Anthropic API", url: "https://console.anthropic.com/", company: "Anthropic", category: "API Providers" },
    { title: "OpenAI API", url: "https://platform.openai.com/", company: "OpenAI", category: "API Providers" },
    { title: "Replicate", url: "https://replicate.com/", company: "Replicate", category: "API Providers" },
    { title: "Rocket New", url: "https://www.rocket.new/dashboard", company: "Rocket New", category: "Chatbots" },
    { title: "Anomaly OpenCode", url: "https://github.com/anomalyco/opencode", company: "Anomaly OpenCode", category: "Autonomous Agents" },
    { title: "Pi.dev", url: "https://pi.dev/", company: "Pi.dev", category: "Autonomous Agents" },
    { title: "OpenClaw", url: "https://github.com/openclaw/openclaw", company: "OpenClaw", category: "Autonomous Agents" },
    { title: "Skills.sh", url: "https://www.skills.sh/", company: "Skills.sh", category: "Skills" },
    { title: "Claude Marketplaces", url: "https://claudemarketplaces.com/skills", company: "Claude Marketplaces", category: "Skills" },
    { title: "dachent/skills", url: "https://github.com/dachent/skills", company: "dachent/skills", category: "Skills" },
    { title: "Awesome Claude Skills", url: "https://github.com/ComposioHQ/awesome-claude-skills", company: "ComposioHQ", category: "Skills" },
    { title: "Composio", url: "https://composio.dev/", company: "Composio", category: "Skills" },
    { title: "Toolhouse", url: "https://toolhouse.ai/", company: "Toolhouse", category: "Skills" },
    { title: "LlamaHub", url: "https://llamahub.ai/", company: "LlamaIndex", category: "Skills" },
    { title: "E2B", url: "https://e2b.dev/", company: "E2B", category: "Skills" },
    { title: "Eigent", url: "https://www.eigent.ai/de/skills", company: "Eigent", category: "Skills" },
    { title: "GStack", url: "https://github.com/garrytan/gstack", company: "GStack", category: "Development" }
].map((link, idx) => ({
    ...link,
    id: 'link_' + idx,
    icon: `https://www.google.com/s2/favicons?domain=${new URL(link.url).hostname}&sz=64`,
    addDate: Math.floor(Date.now() / 1000)
}));

let bookmarks = [];
let activeCategory = "All";
let searchQuery = "";

// DOM Elements
const dashboard = document.getElementById('dashboard');
const categoryList = document.getElementById('category-list');
const bookmarksGrid = document.getElementById('bookmarks-grid');
const searchInput = document.getElementById('search-input');
const exportBtn = document.getElementById('export-btn');

// Initialize App
function init() {
    // Always load directly from the PRELOADED_LINKS list in this file
    bookmarks = PRELOADED_LINKS;

    // We no longer need the import overlay, go straight to dashboard
    const importOverlay = document.getElementById('import-overlay');
    if (importOverlay) {
        importOverlay.classList.add('hidden');
    }
    dashboard.classList.remove('hidden');

    setupCategories();
    renderBookmarks();
}

// Setup Categories in Sidebar and Modal
function setupCategories() {
    // Sidebar list
    const sidebarHtml = `
        <li class="active" data-category="All">All</li>
        ${CATEGORIES.map(c => `<li data-category="${c}">${c}</li>`).join('')}
    `;
    categoryList.innerHTML = sidebarHtml;

    categoryList.addEventListener('click', (e) => {
        if (e.target.tagName === 'LI') {
            document.querySelectorAll('#category-list li').forEach(li => li.classList.remove('active'));
            e.target.classList.add('active');
            activeCategory = e.target.getAttribute('data-category');
            renderBookmarks();
        }
    });
}

// Render Bookmarks
function renderBookmarks() {
    bookmarksGrid.innerHTML = '';

    const filtered = bookmarks.filter(b => {
        const matchCategory = activeCategory === 'All' || b.category === activeCategory;
        const matchSearch = b.title.toLowerCase().includes(searchQuery.toLowerCase()) || b.url.toLowerCase().includes(searchQuery.toLowerCase());
        return matchCategory && matchSearch;
    });

    if (filtered.length === 0) {
        bookmarksGrid.innerHTML = '<p style="color: var(--text-muted);">No bookmarks found.</p>';
        return;
    }

    filtered.forEach(b => {
        const card = document.createElement('a');
        card.href = b.url;
        card.target = '_blank';
        card.className = 'card glass-panel';

        // Default icon if none provided
        const iconSrc = b.icon ? b.icon : 'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="%2394a3b8" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"></path><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"></path></svg>';

        card.innerHTML = `
            <div class="card-header">
                <img src="${iconSrc}" class="card-icon" onerror="this.src='data:image/svg+xml;utf8,<svg xmlns=%22http://www.w3.org/2000/svg%22 width=%2224%22 height=%2224%22 viewBox=%220 0 24 24%22 fill=%22none%22 stroke=%22%2394a3b8%22 stroke-width=%222%22 stroke-linecap=%22round%22 stroke-linejoin=%22round%22><circle cx=%2212%22 cy=%2212%22 r=%2210%22></circle><line x1=%2212%22 y1=%228%22 x2=%2212%22 y2=%2212%22></line><line x1=%2212%22 y1=%2216%22 x2=%2212.01%22 y2=%2216%22></line></svg>'">
                <div class="card-title" title="${b.title}">${b.title}</div>
            </div>
            <div class="card-category">${b.category}</div>
            <div class="card-footer">
                <span style="font-size: 0.8rem; color: var(--text-muted);">${new URL(b.url).hostname.replace('www.', '')}</span>
            </div>
        `;
        bookmarksGrid.appendChild(card);
    });
}

// Search
searchInput.addEventListener('input', (e) => {
    searchQuery = e.target.value;
    renderBookmarks();
});

// Delete Logic
window.deleteBookmark = function (event, id) {
    event.preventDefault(); // prevent navigation
    event.stopPropagation();

    bookmarks = bookmarks.filter(b => b.id !== id);
    saveBookmarks();
    renderBookmarks();
};

// Save to LocalStorage
function saveBookmarks() {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(bookmarks));
}

// Export Backup
exportBtn.addEventListener('click', () => {
    const dataStr = "data:text/json;charset=utf-8," + encodeURIComponent(JSON.stringify(bookmarks, null, 2));
    const downloadAnchorNode = document.createElement('a');
    downloadAnchorNode.setAttribute("href", dataStr);
    downloadAnchorNode.setAttribute("download", "bookmarks_backup.json");
    document.body.appendChild(downloadAnchorNode);
    downloadAnchorNode.click();
    downloadAnchorNode.remove();
});

// Start
init();