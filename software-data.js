const softwareData = [
    {
        title: "DiffExo",
        subtitle: "ChIP-exo Peak Normalization Pipeline",
        icon: "ri-line-chart-line",
        desc: "Normalization pipeline for DNA-binding protein binding intensity with differential binding site identification using DESeq2. Performs statistical analysis and generates comprehensive visualization plots including box plots, scatter plots, heat maps, and volcano plots.",
        image: "software-photo/diffexo.png",
        tags: ["Python", "ChIP-exo", "DESeq2"],
        links: [
            { text: "GitHub", url: "https://github.com/SBML-Kimlab/DiffExo", icon: "ri-github-line", type: "primary" },
            { text: "Zenodo", url: "https://zenodo.org/records/14552245", icon: "ri-database-2-line", type: "secondary" },
            { text: "Paper", url: "https://pubmed.ncbi.nlm.nih.gov/39868540/", icon: "ri-article-line", type: "secondary" }
        ],
        citation: "Park JY#, Jang M#, Choi E, et al. ChIP-mini: a low-input ChIP-exo protocol for elucidating DNA-binding protein dynamics in intracellular pathogens. Nucleic Acids Res. 2025."
    },
    {
        title: "BOARDS",
        subtitle: "Blanket Overarching Antimicrobial-Resistance gene Database",
        icon: "ri-shield-cross-line",
        desc: "Comprehensive AMR gene database with predicted protein structures. Features web-based server for easy access, cross-validated protein structure predictions, and open-source format (FASTA) for searchability and modification. Integrated with automated WGS analysis pipeline.",
        image: "software-photo/boards.png",
        tags: ["AMR", "Database", "Protein Structure"],
        links: [
            { text: "Web Server", url: "https://sbml.unist.ac.kr/", icon: "ri-global-line", type: "primary" },
            { text: "Paper", url: "https://pubmed.ncbi.nlm.nih.gov/38095876/", icon: "ri-article-line", type: "secondary" }
        ],
        citation: "Ko S#, Kim J#, Lim J, et al. Blanket antimicrobial resistance gene database with structural information, BOARDS. mSystems. 2023."
    },
    {
        title: "DEOCSU",
        subtitle: "DEep-learning Optimized ChIP-exo peak calling SUite",
        icon: "ri-brain-line",
        desc: "Deep convolutional neural network model for distinguishing bona fide ChIP-exo peaks from false ones with >95% accuracy, precision, and recall. Features cloud computing compatibility, visualization tools (MetaScope), and adjustable thresholds for optimization.",
        image: "software-photo/deocsu.png",
        tags: ["Deep Learning", "ChIP-exo", "CNN"],
        links: [
            { text: "GitHub", url: "https://github.com/SBML-Kimlab/DEOCSU", icon: "ri-github-line", type: "primary" },
            { text: "Paper", url: "https://pubmed.ncbi.nlm.nih.gov/36688456/", icon: "ri-article-line", type: "secondary" }
        ],
        citation: "Bang I#, Lee SM#, Park S#, et al. Deep-learning optimized DEOCSU suite provides an iterable pipeline for accurate ChIP-exo peak calling. Brief Bioinform. 2023."
    },
    {
        title: "ChEAP",
        subtitle: "ChIP-exo Analysis Pipeline",
        icon: "ri-flask-line",
        desc: "One-step ChIP-exo analysis from raw reads to visualization. Implemented in Jupyter Notebook, compatible with Google Colab for cloud-based execution. Facilitates code sharing and collaboration among researchers with free GPU/CPU resources.",
        image: "software-photo/cheap.png",
        tags: ["Python", "Jupyter", "Cloud"],
        links: [
            { text: "GitHub", url: "https://github.com/SBML-Kimlab/ChEAP", icon: "ri-github-line", type: "primary" },
            { text: "Paper", url: "https://www.sciencedirect.com/science/article/pii/S2001037022005475", icon: "ri-article-line", type: "secondary" }
        ],
        citation: "Bang I#, Nong LK#, Park JY, et al. ChEAP: ChIP-exo analysis pipeline and the investigation of E. coli RpoN protein-DNA interactions. Comput Struct Biotechnol J. 2022."
    },
    {
        title: "MetaScope",
        subtitle: "Integrative Genome Browser",
        icon: "ri-eye-line",
        desc: "Genome browser with highly flexible and interactive interface for visualizing genome-scale datasets. Handles tiling array data (ChIP-chip, expression profiling), peak data, TSS data, and genomic annotations in GFF format. Features data analysis, curation, and integration functions.",
        image: "software-photo/metascope.png",
        tags: ["Visualization", "Genome Browser", "Multi-omics"],
        links: [
            { text: "GitHub", url: "https://github.com/SBML-Kimlab/MetaScope", icon: "ri-github-line", type: "primary" },
            { text: "Paper", url: "https://pubmed.ncbi.nlm.nih.gov/36688456/", icon: "ri-article-line", type: "secondary" }
        ],
        citation: "Bang I#, Lee SM#, Park S#, et al. Brief Bioinform. 2023."
    }
];