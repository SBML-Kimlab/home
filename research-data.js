const researchData = [
    {
        id: "transcriptional",
        icon: "ri-dna-line",
        title: "Transcriptional Regulatory Network Reconstruction",
        description: "Systems biology has benefited from improvements in omics technologies, leading to an interest in the comprehensive molecular processes that bacteria go through in response to their surroundings.",
        sections: [
            {
                heading: "Approach",
                content: "By specifically utilizing Chromatin immunoprecipitation (ChIP-seq) and transcriptomics analysis (RNA-seq), we can reconstruct a transcriptional regulatory network (TRN) that offers insight into gene regulation and interaction in response to external stimuli."
            },
            {
                heading: "Target Organisms",
                items: [
                    "<i>Escherichia coli</i>",
                    "<i>Salmonella</i> enterica",
                    "<i>Klebsiella</i> species",
                    "Methylobacterium"
                ]
            },
            {
                heading: "Tools & Methods",
                content: "To conduct the high-throughput experiment data analysis, we have developed a specific pipeline and deep-learning-based high-performance software for TRN reconstruction and analysis."
            }
        ],
        images: ["research-photo/TRN.png"]
    },
    {
        id: "genome-modeling",
        icon: "ri-flask-line",
        title: "Genome-Scale Metabolic Modeling",
        description: "Genome-scale models (GSMs) are knowledge-based and experimentally validated mathematical representations of biological metabolism. Utilizing GSMs can provide insights into how biological systems function and help in the design of microbial cell factories.",
        sections: [
            {
                heading: "Research Topics",
                items: [
                    "Genome-scale model reconstruction of high-value bacterial strains including <i>Streptomyces</i>, <i>Vibrio</i>, and C1 bacteria",
                    "Model-based analysis to understand complex biological systems or to design microbial cell factories",
                    "Omics data integration for biological discovery"
                ]
            },
            {
                heading: "Applications",
                content: "Our models are used for metabolic engineering, pathway optimization, and predicting cellular behavior under various environmental conditions."
            }
        ],
        images: ["research-photo/GSM.png", "research-photo/Methylotrophs.png"]
    },
    {
        id: "bacterial-strains",
        icon: "ri-test-tube-line",
        title: "Characterization of High-Value Bacterial Strains",
        description: "We focus on understanding and optimizing industrially important bacterial strains for biotechnology applications.",
        sections: [
            {
                heading: "Key Activities",
                items: [
                    "Metabolic pathway analysis and optimization",
                    "Strain improvement through systems-level understanding",
                    "Production of valuable compounds and enzymes",
                    "Integration of multi-omics data for comprehensive characterization"
                ]
            }
        ],
        images: ["research-photo/phage.png"]
    },
    {
        id: "antimicrobial",
        icon: "ri-shield-cross-line",
        title: "Anti-Microbial Resistance",
        description: "Investigating mechanisms of antimicrobial resistance and developing strategies to combat resistant pathogens using systems biology approaches.",
        sections: [
            {
                heading: "Research Focus",
                items: [
                    "Understanding resistance mechanisms at the systems level",
                    "Identifying novel drug targets through network analysis",
                    "Predicting resistance evolution",
                    "Developing combination therapy strategies"
                ]
            }
        ],
        images: ["research-photo/AMR.png"]
    },
    {
        id: "machine-learning",
        icon: "ri-brain-line",
        title: "Machine Learning for Biological Data",
        description: "Developing and applying advanced machine learning frameworks for analyzing biological information and solving complex problems.",
        sections: [
            {
                heading: "Applications",
                items: [
                    "Deep learning for transcriptomics data analysis",
                    "Enzyme function prediction using AI models",
                    "Protein engineering through machine learning",
                    "Automated biological discovery from large-scale datasets"
                ]
            }
        ],
        images: ["research-photo/ML.png"]
    }
];