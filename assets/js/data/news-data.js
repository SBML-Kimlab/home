const newsData = [
  {
    year: 2025,
    month: 'December',
    title: 'Ph.D. Defense - Linh Khanh Nong',
    desc: 'Linh Khanh Nong successfully defended her doctoral thesis on December 15th, 2025',
    tag: 'Graduation'
  },
  {
    year: 2025,
    month: 'December',
    title: 'Ph.D. Defense - Gyu Min Lee',
    desc: 'Gyu Min Lee successfully defended his doctoral thesis on December 4th, 2025',
    tag: 'Graduation'
  },
  {
    year: 2025,
    month: 'December',
    title: 'Ph.D. Defense - Ina Bang',
    desc: 'Ina Bang successfully defended her doctoral thesis on December 4th, 2025',
    tag: 'Graduation'
  },
  {
    year: 2025,
    month: 'November',
    title: 'Best Poster Award - Linh Khanh Nong',
    desc: 'Linh Khanh Nong received a prize of best poster presentation in 2025 KSIEC Fall Meeting & Conference',
    tag: 'Award'
  },
  {
    year: 2025,
    month: 'November',
    title: 'Best Poster Award - Minchang Jang',
    desc: 'Minchang Jang received a prize of best poster presentation in 2025 KSIEC Fall Meeting & Conference',
    tag: 'Award'
  },
  {
    year: 2025,
    month: 'October',
    title: 'Best Poster Award - Jihoon Woo',
    desc: 'Jihoon Woo received a prize of best poster presentation in 2025 KIChE Fall Meeting & International Symposium',
    tag: 'Award'
  },
  {
    year: 2025,
    month: 'September',
    title: 'Best Paper Award - Ina Bang',
    desc: 'Ina Bang received the Best Paper Presentation Award in the Poster Session at the KSBB-AFOB Conference 2025',
    tag: 'Award'
  },
  {
    year: 2025,
    month: 'June',
    title: 'Best Poster Award - Jaehyung Kim',
    desc: 'Jaehyung Kim received a prize of best poster presentation in 2025 KSIEC Spring Meeting & International Conference',
    tag: 'Award'
  },
  {
    year: 2025,
    month: 'June',
    title: 'Best Poster Award - Jihoon Woo',
    desc: 'Jihoon Woo received a prize of best poster presentation in 2025 KSIEC Spring Meeting & International Conference',
    tag: 'Award'
  },
  {
    year: 2024,
    month: 'December',
    title: "Master's Defense - Yunseo Kim",
    desc: 'Yunseo Kim successfully defended her master thesis on December 18th, 2024',
    tag: 'Graduation'
  },
  {
    year: 2024,
    month: 'December',
    title: 'Ph.D. Defense - Joon Young Park',
    desc: 'Joon Young Park successfully defended his doctoral thesis on December 10th, 2024',
    tag: 'Graduation'
  },
  {
    year: 2024,
    month: 'April',
    title: 'Best Poster Award - Ina Bang',
    desc: 'Ina Bang received a prize of best poster presentation in 2024 KIChE Spring Meeting',
    tag: 'Award'
  },
  {
    year: 2024,
    month: 'April',
    title: 'Best Poster Award - Joon Young Park',
    desc: 'Joon Young Park received a prize of best poster presentation in 2024 KSBB Spring Meeting',
    tag: 'Award'
  },
  {
    year: 2023,
    month: 'December',
    title: 'Invited Talk - Asian Synthetic Biology Association',
    desc: 'Dr. Donghyuk Kim gave an invited talk at the Asian Synthetic Biology Association 2023 in Japan',
    tag: 'Talk'
  },
  {
    year: 2023,
    month: 'December',
    title: 'Ph.D. Defense - Seyoung Ko',
    desc: 'Seyoung Ko successfully defended his doctoral thesis on December 11th, 2023',
    tag: 'Graduation'
  },
  {
    year: 2023,
    month: 'November',
    title: 'Invited Talk - BIOSPECTRUM 2023',
    desc: 'Dr. Donghyuk Kim gave an invited talk at the BIOSPECTRUM 2023 in India',
    tag: 'Talk'
  },
  {
    year: 2023,
    month: 'November',
    title: 'Invited Talk - NHBT-2023',
    desc: 'Dr. Donghyuk Kim gave an invited talk at the NHBT-2023 in India',
    tag: 'Talk'
  },
  {
    year: 2023,
    month: 'November',
    title: 'Invited Talk - US-Korea Synthetic Biology Conference',
    desc: 'Dr. Donghyuk Kim gave an invited talk at the 2nd US-Korea Synthetic Biology Conference at Agile Biofoundry',
    tag: 'Talk'
  },
  {
    year: 2023,
    month: 'November',
    title: 'Ph.D. Defense - Seojoung Park',
    desc: 'Seojoung Park successfully defended her thesis on November 15th, 2023',
    tag: 'Graduation'
  },
  {
    year: 2023,
    month: 'November',
    title: 'Best Poster Award - Joon Young Park',
    desc: 'Joon Young Park received a prize of best poster presentation in 2023 KSIEC Fall Meeting',
    tag: 'Award'
  },
  {
    year: 2023,
    month: 'October',
    title: 'Best Poster Award - Joon Young Park',
    desc: 'Joon Young Park received a prize of best poster presentation in 2023 KSBB Fall Meeting & International Symposium',
    tag: 'Award'
  },
  {
    year: 2023,
    month: 'October',
    title: 'Invited Talk - Nazarbayev University (Biology)',
    desc: 'Dr. Donghyuk Kim gave an invited talk at Department of Biology of Nazarbayev University',
    tag: 'Talk'
  },
  {
    year: 2023,
    month: 'September',
    title: 'Invited Talk - Nazarbayev University (ChemE)',
    desc: 'Dr. Donghyuk Kim gave an invited talk at Department of Chemical Engineering of Nazarbayev University',
    tag: 'Talk'
  },
  {
    year: 2023,
    month: 'September',
    title: 'Research Grant Award - Ina Bang',
    desc: "Ina Bang has been awarded a research grant from the National Research Foundation of Korea's Basic Science Research Program, funded by the Ministry of Education",
    tag: 'Award'
  },
  {
    year: 2023,
    month: 'August',
    title: 'Invited Talk - Asia Synthetic Biology Workshop',
    desc: 'Dr. Donghyuk Kim gave an invited talk at the inaugural Asia Synthetic Biology Metrics and Standards Workshop in Singapore',
    tag: 'Talk'
  },
  {
    year: 2023,
    month: 'August',
    title: 'Invited Talk - Catholic University',
    desc: 'Dr. Donghyuk Kim gave an invited talk at the Department of Biotechnology of Catholic University',
    tag: 'Talk'
  },
  {
    year: 2023,
    month: 'August',
    title: 'Invited Talk - KSBB Gwangju-Jeonnam Branch',
    desc: 'Dr. Donghyuk Kim gave an invited talk at Gwangju-Jeonnam Branch Symposium of Korean Society for Biotechnology and Bioengineering',
    tag: 'Talk'
  },
  {
    year: 2023,
    month: 'July',
    title: 'Invited Talk - YABEC',
    desc: "Dr. Donghyuk Kim gave an invited talk at Young Asian Biological Engineers' Community (YABEC)",
    tag: 'Talk'
  },
  {
    year: 2023,
    month: 'July',
    title: 'Invited Talk - KRICT',
    desc: 'Dr. Donghyuk Kim gave an invited talk at Center for Bio-based Chemistry of Korea Research Institute of Chemical Technology (KRICT)',
    tag: 'Talk'
  },
  {
    year: 2023,
    month: 'June',
    title: 'Award - Ina Bang',
    desc: 'Ina Bang received an encouragement prize of poster presentation in 2023 KMB 50th Annual Meeting & International Symposium',
    tag: 'Award'
  },
  {
    year: 2023,
    month: 'June',
    title: 'Best Poster Award - Joon Young Park',
    desc: 'Joon Young Park received a prize of best poster presentation in 2023 KMB 50th Annual Meeting & International Symposium',
    tag: 'Award'
  },
  {
    year: 2023,
    month: 'June',
    title: 'Invited Talk - Ulsan Biochemical Industry Forum',
    desc: 'Dr. Donghyuk Kim gave an invited talk at Ulsan Biochemical Industry Forum',
    tag: 'Talk'
  },
  {
    year: 2023,
    month: 'May',
    title: 'Best Poster Award - Joon Young Park',
    desc: 'Joon Young Park received a prize of best poster presentation in 2023 KSIEC Spring Meeting',
    tag: 'Award'
  },
  {
    year: 2023,
    month: 'March',
    title: 'Invited Talk - POSTECH i-bio',
    desc: 'Dr. Donghyuk Kim gave an invited talk at School of Interdisciplinary Bioscience & Bioengineering (i-bio) of POSTECH',
    tag: 'Talk'
  },
  {
    year: 2022,
    month: 'September',
    title: 'Best Poster Award - Minchang Jang',
    desc: 'Minchang Jang received a prize of best poster presentation in 2022 KSBB Fall Meeting and International Symposium',
    tag: 'Award'
  },
  {
    year: 2022,
    month: 'June',
    title: 'Best Poster Award - Dr. Sang-Mok Lee',
    desc: 'Dr. Sang-Mok Lee received a prize of best poster presentation in 2022 KMB 49th Annual Meeting & International Symposium',
    tag: 'Award'
  },
  {
    year: 2022,
    month: 'June',
    title: 'Best Poster Award - Ina Bang',
    desc: 'Ina Bang received a prize of best poster presentation in 2022 KMB 49th Annual Meeting & International Symposium',
    tag: 'Award'
  },
  {
    year: 2020,
    month: 'June',
    title: 'Best Poster Award - Joon Young Park',
    desc: 'Joon Young Park received a prize of best poster presentation in 2020 KSBB Spring Meeting and International Symposium',
    tag: 'Award'
  },
  {
    year: 2020,
    month: 'March',
    title: 'Editorial Appointment',
    desc: 'Dr. Donghyuk Kim is serving as an editor for Bioresources and Bioprocessing for 3 years',
    tag: 'Lab Update'
  },
  {
    year: 2020,
    month: 'January',
    title: 'Invited Talk - Seoul National University',
    desc: 'Dr. Donghyuk Kim gave an invited talk at College of Veterinary Medicine of Seoul National University',
    tag: 'Talk'
  },
  {
    year: 2019,
    month: 'December',
    title: 'Invited Talk - mBiome',
    desc: 'Dr. Donghyuk Kim gave an invited talk at mBiome, Korea',
    tag: 'Talk'
  },
  {
    year: 2019,
    month: 'November',
    title: 'Invited Talk - NHBT-2019',
    desc: 'Dr. Donghyuk Kim gave an invited talk at NHBT-2019, India',
    tag: 'Talk'
  },
  {
    year: 2019,
    month: 'November',
    title: 'Invited Talk - iBioT Symposium',
    desc: 'Dr. Donghyuk Kim gave an invited talk at iBioT Symposium, Taiwan',
    tag: 'Talk'
  },
  {
    year: 2019,
    month: 'October',
    title: 'Best Poster Award - Ina Bang',
    desc: 'Ina Bang received a prize of best poster presentation in 2019 KSBB Fall Meeting and International Symposium',
    tag: 'Award'
  },
  {
    year: 2019,
    month: 'October',
    title: 'Invited Talk - KSIEC',
    desc: 'Dr. Donghyuk Kim gave an invited talk at KSIEC (Korean Society of Industrial and Engineering Chemistry)',
    tag: 'Talk'
  },
  {
    year: 2019,
    month: 'October',
    title: 'Invited Talk - ASBA 2019',
    desc: 'Dr. Donghyuk Kim gave an invited talk at ASBA 2019 (Asian Synthetic Biology Association)',
    tag: 'Talk'
  },
  {
    year: 2019,
    month: 'October',
    title: 'Invited Talk - KICHE',
    desc: 'Dr. Donghyuk Kim gave an invited talk at KICHE (Korean Institute of Chemical Engineers)',
    tag: 'Talk'
  },
  {
    year: 2019,
    month: 'October',
    title: 'Invited Talk - KSBB',
    desc: 'Dr. Donghyuk Kim gave an invited talk at KSBB (Korean Society for Biotechnology and Bioengineering)',
    tag: 'Talk'
  },
  {
    year: 2019,
    month: 'August',
    title: 'Invited Talk - INESS 2019',
    desc: 'Dr. Donghyuk Kim gave an invited talk at INESS 2019, Kazakhstan',
    tag: 'Talk'
  },
  {
    year: 2019,
    month: 'July',
    title: 'Invited Talk - Pusan National University',
    desc: 'Dr. Donghyuk Kim gave an invited talk at School of Dentistry of Pusan National University',
    tag: 'Talk'
  },
  {
    year: 2019,
    month: 'July',
    title: 'Talk - RNomics Symposium',
    desc: 'Dr. Donghyuk Kim gave a talk at 2019 RNomics Symposium',
    tag: 'Talk'
  },
  {
    year: 2019,
    month: 'June',
    title: 'Invited Talk - KSBB',
    desc: 'Dr. Donghyuk Kim gave an invited talk at Korean Society for Biotechnology and Bioengineering',
    tag: 'Talk'
  },
  {
    year: 2019,
    month: 'March',
    title: 'New Member - Linh Khanh Nong',
    desc: 'Linh Khanh Nong joined SBL for her MS-PhD program',
    tag: 'Lab Update'
  },
  {
    year: 2019,
    month: 'February',
    title: 'Invited Talk - KRIBB',
    desc: 'Dr. Donghyuk Kim gave an invited talk at Korea Research Institute of Bioscience & Biotechnology',
    tag: 'Talk'
  },
  {
    year: 2019,
    month: 'February',
    title: 'Invited Talk - Kyung Hee University',
    desc: 'Dr. Donghyuk Kim gave an invited talk at School of Biotechnology of Kyung Hee University',
    tag: 'Talk'
  },
  {
    year: 2019,
    month: 'February',
    title: 'Invited Talk - Korean Genome Organization',
    desc: 'Dr. Donghyuk Kim gave an invited talk at Korean Genome Organization',
    tag: 'Talk'
  },
  {
    year: 2019,
    month: 'February',
    title: 'Talk - Nazarbayev University',
    desc: 'Dr. Donghyuk Kim gave a talk at Department of Civil and Environmental Engineering of Nazarbayev University',
    tag: 'Talk'
  },
  {
    year: 2019,
    month: 'February',
    title: 'Invited Talk - Nazarbayev University',
    desc: 'Dr. Donghyuk Kim gave an invited talk at Department of Biology of Nazarbayev University',
    tag: 'Talk'
  },
  {
    year: 2019,
    month: 'January',
    title: 'Invited Talk - Pusan National University',
    desc: 'Dr. Donghyuk Kim gave an invited talk at Department of Energy Environmental Engineering of Pusan National University',
    tag: 'Talk'
  },
  {
    year: 2018,
    month: 'November',
    title: 'Invited Talk - Sungkyunkwan University',
    desc: 'Dr. Donghyuk Kim gave an invited talk at Department of Food Biotechnology of Sungkyunkwan University',
    tag: 'Talk'
  },
  {
    year: 2018,
    month: 'November',
    title: 'Invited Talk - KSIEC',
    desc: 'Dr. Donghyuk Kim gave an invited talk at Korean Society of Industrial and Engineering Chemistry',
    tag: 'Talk'
  },
  {
    year: 2018,
    month: 'October',
    title: 'Best Poster Award - Seyoung Ko',
    desc: 'Seyoung Ko received prize of best poster presentation in 2018 FKMS',
    tag: 'Award'
  },
  {
    year: 2018,
    month: 'October',
    title: 'Talk - Palsson Lab Reunion',
    desc: 'Dr. Donghyuk Kim gave a talk at Palsson Lab Reunion in Korea',
    tag: 'Talk'
  },
  {
    year: 2018,
    month: 'October',
    title: 'Invited Talk - KICHE',
    desc: 'Dr. Donghyuk Kim gave an invited talk at Korean Institute of Chemical Engineers',
    tag: 'Talk'
  },
  {
    year: 2018,
    month: 'October',
    title: 'Invited Talk - Inha University',
    desc: 'Dr. Donghyuk Kim gave an invited talk at Department of Bioengineering of Inha University',
    tag: 'Talk'
  },
  {
    year: 2018,
    month: 'October',
    title: 'Invited Talk - FKMS',
    desc: 'Dr. Donghyuk Kim gave an invited talk at Federation of Korean Microbiological Societies',
    tag: 'Talk'
  },
  {
    year: 2018,
    month: 'October',
    title: 'Invited Talk - KAIST',
    desc: 'Dr. Donghyuk Kim gave an invited talk at Graduate School of Medical Science and Engineering of KAIST',
    tag: 'Talk'
  },
  {
    year: 2018,
    month: 'October',
    title: 'Invited Talk - POSTECH i-bio',
    desc: 'Dr. Donghyuk Kim gave an invited talk at i-Bio of POSTECH',
    tag: 'Talk'
  },
  {
    year: 2018,
    month: 'September',
    title: 'KOGIC Membership',
    desc: 'Dr. Donghyuk Kim became a member of KOGIC (Korean Genomics Industrialization and Commercialization Center) at UNIST',
    tag: 'Lab Update'
  },
  {
    year: 2018,
    month: 'August',
    title: 'Invited Talk - Korean Society of Life Science',
    desc: 'Dr. Donghyuk Kim gave an invited talk at Korean Society of Life Science',
    tag: 'Talk'
  },
  {
    year: 2018,
    month: 'July',
    title: 'Lab Relocation',
    desc: 'Systems Biology and Machine Learning Lab moved to School of Energy and Chemical Engineering, UNIST',
    tag: 'Lab Update'
  },
  {
    year: 2018,
    month: 'July',
    title: 'Invited Talk - Kyungpook National University',
    desc: 'Dr. Donghyuk Kim gave an invited talk at the School of Food Science and Biotechnology of Kyungpook National University',
    tag: 'Talk'
  },
  {
    year: 2018,
    month: 'March',
    title: 'Invited Talk - Yonsei University',
    desc: 'Dr. Donghyuk Kim gave an invited talk at Division of Biological Science and Technology of Yonsei University',
    tag: 'Talk'
  },
  {
    year: 2018,
    month: 'January',
    title: 'New Members',
    desc: 'Jaewon Lim and Joon Young Park joined SBL from 2018 spring semester',
    tag: 'Lab Update'
  },
  {
    year: 2017,
    month: 'November',
    title: 'Invited Talk - FKMS',
    desc: 'Dr. Donghyuk Kim gave an invited talk at Federation of Korean Microbiological Societies',
    tag: 'Talk'
  },
  {
    year: 2017,
    month: 'October',
    title: 'Invited Talk - KSBB',
    desc: 'Dr. Donghyuk Kim gave an invited talk at Korean Society for Biotechnology and Bioengineering',
    tag: 'Talk'
  },
  {
    year: 2017,
    month: 'September',
    title: 'New Members',
    desc: 'Hoa Thi Le (Ph.D. student) and Ilyas Kabimoldayev (M.S.-Ph.D. student) joined SBL',
    tag: 'Lab Update'
  },
  {
    year: 2017,
    month: 'March',
    title: 'New Member - Gyu Min Lee',
    desc: 'Gyu Min Lee (M.S. student) joined the lab',
    tag: 'Lab Update'
  },
  {
    year: 2017,
    month: 'March',
    title: 'New Member - Assiya Taizhanova',
    desc: 'Assiya Taizhanova (M.S. student) joined the lab',
    tag: 'Lab Update'
  },
  {
    year: 2017,
    month: 'January',
    title: 'Talk - Inha University',
    desc: 'Dr. Donghyuk Kim gave a talk at Department of Bioengineering of Inha University',
    tag: 'Talk'
  },
  {
    year: 2017,
    month: 'January',
    title: 'Talk - Hanyang University',
    desc: 'Dr. Donghyuk Kim gave a talk at Department of Life Science of Hanyang University',
    tag: 'Talk'
  },
  {
    year: 2017,
    month: 'January',
    title: 'New Member - Seyoung Ko',
    desc: 'Seyoung Ko (M.S. student) joined the lab',
    tag: 'Lab Update'
  },
  {
    year: 2016,
    month: 'November',
    title: 'Invited Talk - Kyung Hee University',
    desc: 'Dr. Donghyuk Kim gave an invited talk at Department of Chemical Engineering of Kyung Hee University',
    tag: 'Talk'
  },
  {
    year: 2016,
    month: 'November',
    title: 'Invited Talk - FKMS',
    desc: 'Dr. Donghyuk Kim gave an invited talk at Federation of Korean Microbiological Societies',
    tag: 'Talk'
  },
  {
    year: 2016,
    month: 'August',
    title: 'Talk - Nazarbayev University',
    desc: 'Dr. Donghyuk Kim gave a talk at Nazarbayev University to recruit graduate students',
    tag: 'Talk'
  },
  {
    year: 2016,
    month: 'June',
    title: 'Invited Talk - UK-KOR Synthetic Biology Symposium',
    desc: 'Dr. Donghyuk Kim gave an invited talk at the 6th UK-KOR Synthetic Biology Symposium and 2016 Korea Society for Microbiology and Biotechnology',
    tag: 'Talk'
  }
];
