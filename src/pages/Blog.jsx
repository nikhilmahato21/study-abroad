import React from "react";

const Blog = () => {
  // Sample blog posts data
  const blogPosts = [
    {
      id: 1,
      title:
        "Top Universities in Italy for International Students: A Comprehensive Guide",
      author: "Mrinal Dawn",
      date: "June 20, 2024",
      imageUrl: "https://via.placeholder.com/300x200",
      introduction:
        "Italy, a country renowned for its rich history, breathtaking landscapes, and unparalleled cultural heritage, is also a hub for higher education. With a legacy that spans centuries, Italy boasts some of the oldest and most prestigious universities in the world. For international students, studying in Italy offers an opportunity to immerse themselves in world-class education while experiencing the vibrant Italian lifestyle. This blog post explores the top universities in Italy, highlighting their unique features and benefits that make them attractive to students from around the globe.",
      sections: [
        {
          title: "Politecnico di Milano",
          subsections: [
            {
              subtitle: "Reputation and Rankings",
              content:
                "Politecnico di Milano is consistently ranked as the top university in Italy for engineering, architecture, and design:\n- QS World University Rankings 2024: 139th globally, 1st in Italy for Engineering & Technology.\n- Times Higher Education (THE) World University Rankings 2024: 301-350 globally.",
            },
            {
              subtitle: "Reputation in Engineering, Architecture, and Design",
              content:
                "Politecnico di Milano is a leading institution in the fields of engineering, architecture, and design. Known for its innovative approach and cutting-edge research, the university consistently ranks among the top technical universities in Europe.",
            },
            {
              subtitle: "State-of-the-Art Facilities and Industry Connections",
              content:
                "The university boasts state-of-the-art facilities, including advanced laboratories, research centers, and design studios. Its strong connections with industry leaders provide students with valuable internship opportunities, hands-on experience, and a pathway to successful careers.",
            },
            {
              subtitle: "Notable Alumni",
              content:
                "Renzo Piano: World-renowned architect known for projects like The Shard in London.\nGiulio Natta: Chemist and Nobel Prize winner in Chemistry.\nAldo Rossi: Influential architect and designer.",
            },
          ],
        },
        {
          title: "University of Bologna",
          subsections: [
            {
              subtitle: "Reputation and Rankings",
              content:
                "The University of Bologna is one of the most prestigious universities in Italy:\n- QS World University Rankings 2024: 167th globally.\n- Times Higher Education (THE) World University Rankings 2024: 201-250 globally.",
            },
            {
              subtitle: "Historical Significance and Legacy",
              content:
                'Founded in 1088, the University of Bologna holds the title of the oldest university in the world. Its long-standing tradition of academic excellence has made it a pioneer in higher education. The university\'s motto, "Alma Mater Studiorum," reflects its role as the nurturing mother of studies. Over the centuries, it has been a center for intellectual and cultural development.',
            },
            {
              subtitle: "Key Programs and Research Opportunities",
              content:
                "The University of Bologna offers a wide range of programs across various disciplines, including humanities, sciences, engineering, and social sciences. It is particularly renowned for its strong emphasis on research, with numerous interdisciplinary research centers and collaborations with international institutions. Some key research areas include biotechnology, engineering, and law.",
            },
            {
              subtitle: "International Student Community",
              content:
                "With a diverse and vibrant international student community, the University of Bologna provides a welcoming environment for students from all over the world. Various support services, language courses, and cultural integration programs ensure that international students feel at home.",
            },
            {
              subtitle: "Notable Alumni",
              content:
                'Dante Alighieri: Renowned poet and author of "The Divine Comedy."\nNiccolò Machiavelli: Political philosopher and author of "The Prince."\nGuglielmo Marconi: Inventor and Nobel Prize winner in Physics.',
            },
          ],
        },
        {
          title: "Sapienza University of Rome",
          subsections: [
            {
              subtitle: "Reputation and Rankings",
              content:
                "Sapienza University of Rome has a strong reputation both in Italy and internationally:\n- QS World University Rankings 2024: 171st globally.\n- Times Higher Education (THE) World University Rankings 2024: 201-250 globally.",
            },
            {
              subtitle: "Prime Location in the Capital City",
              content:
                "Located in the heart of Rome, Sapienza University offers students the unique experience of studying in one of the world's most historically and culturally rich cities. The university's proximity to governmental institutions, cultural landmarks, and international organizations enhances its appeal.",
            },
            {
              subtitle: "Wide Range of Academic Disciplines",
              content:
                "Sapienza University is one of the largest universities in Europe, offering an extensive array of programs in fields such as medicine, engineering, humanities, and social sciences. Its interdisciplinary approach and strong emphasis on research contribute to its reputation for academic excellence.",
            },
            {
              subtitle: "Research Output and Notable Alumni",
              content:
                "Sapienza is known for its significant research output, with numerous publications and collaborations with international research institutions. The university's alumni include Nobel laureates, prominent scientists, and influential political figures, underscoring its impact on global academia.",
            },
            {
              subtitle: "Notable Alumni",
              content:
                "Maria Montessori: Educator and creator of the Montessori method of education.\nEnrico Fermi: Physicist and Nobel Prize winner.\nFederico Fellini: Acclaimed film director and screenwriter.",
            },
          ],
        },
        {
          title: "University of Padua",
          subsections: [
            {
              subtitle: "Reputation and Rankings",
              content:
                "The University of Padua is highly regarded in various fields:\n- QS World University Rankings 2024: 243rd globally.\n- Times Higher Education (THE) World University Rankings 2024: 201-250 globally.",
            },
            {
              subtitle: "Rich Academic Tradition and Innovation",
              content:
                "Founded in 1222, the University of Padua has a long history of academic excellence and innovation. It is known for its pioneering contributions to various fields, including medicine, astronomy, and law.",
            },
            {
              subtitle: "Notable Programs and Vibrant Student Life",
              content:
                "The University of Padua offers a wide range of programs, with notable strengths in natural sciences, engineering, and humanities. The vibrant student life in Padua, with numerous cultural events, student organizations, and recreational activities, ensures a well-rounded educational experience.",
            },
            {
              subtitle: "Notable Alumni",
              content:
                'Galileo Galilei: Legendary astronomer and physicist.\nElena Lucrezia Cornaro Piscopia: The first woman in the world to receive a PhD.\nNiccolò Machiavelli: Political philosopher and author of "The Prince."',
            },
          ],
        },
        {
          title: "Scuola Normale Superiore di Pisa",
          subsections: [
            {
              subtitle: "Reputation and Rankings",
              content:
                "Scuola Normale Superiore di Pisa is renowned for its rigorous academic environment and research focus:\n- QS World University Rankings 2024: 204th globally.\n- Times Higher Education (THE) World University Rankings 2024: 201-250 globally.",
            },
            {
              subtitle: "Rigorous Academic Environment",
              content:
                "Scuola Normale Superiore di Pisa is renowned for its rigorous academic environment and focus on research. The institution emphasizes a personalized approach to education, with small class sizes and close interaction between students and faculty.",
            },
            {
              subtitle: "Selective Admission Process",
              content:
                "Known for its highly selective admission process, Scuola Normale Superiore admits only the most talented and motivated students. This exclusivity fosters a community of scholars dedicated to academic excellence and research.",
            },
            {
              subtitle: "Notable Alumni",
              content:
                "Enrico Fermi: Physicist and Nobel Prize winner.\nCarlo Rubbia: Physicist and Nobel Prize winner.\nVittorio Sgarbi: Art critic and politician.",
            },
          ],
        },
        {
          title: "University of Milan",
          subsections: [
            {
              subtitle: "Reputation and Rankings",
              content:
                "The University of Milan is a top choice for students pursuing various academic disciplines:\n- QS World University Rankings 2024: 301-350 globally.\n- Times Higher Education (THE) World University Rankings 2024: 301-350 globally.",
            },
            {
              subtitle: "Wide Range of Academic Programs",
              content:
                "The University of Milan offers a diverse array of programs and is particularly strong in biomedical sciences, economics, and political science. The university's commitment to research and development ensures that students receive a comprehensive and modern education.",
            },
            {
              subtitle: "Strategic Location",
              content:
                "Located in Italy's financial and fashion capital, the university provides numerous opportunities for internships and industry connections. Milan's vibrant cultural scene, international outlook, and thriving economy make it an ideal place for students to live and study.",
            },
            {
              subtitle: "Notable Alumni",
              content:
                "Riccardo Giacconi: Nobel Prize-winning astrophysicist.\nUmberto Eco: Renowned novelist and philosopher.\nGiulio Natta: Chemist and Nobel Prize winner.",
            },
          ],
        },
        {
          title: "University of Turin",
          subsections: [
            {
              subtitle: "Reputation and Rankings",
              content:
                "The University of Turin is known for its excellence in research and diverse academic offerings:\n- QS World University Rankings 2024: 401-410 globally.\n- Times Higher Education (THE) World University Rankings 2024: 351-400 globally.",
            },
            {
              subtitle: "Academic Excellence and Research",
              content:
                "The University of Turin has strong programs in economics, law, and the sciences. Its commitment to research and innovation is reflected in its numerous research centers and collaborations with international institutions.",
            },
            {
              subtitle: "Cultural and Industrial Heritage",
              content:
                "Located in a city renowned for its cultural and industrial heritage, the University of Turin offers students a rich academic and cultural experience. Turin's historical significance, vibrant arts scene, and dynamic economy provide a stimulating environment for students.",
            },
            {
              subtitle: "Notable Alumni",
              content:
                "Cesare Pavese: Influential writer and poet.\nErnesto Rossi: Economist and antifascist activist.\nRita Levi-Montalcini: Nobel Prize-winning neurobiologist.",
            },
          ],
        },
        {
          title: "University of Rome Tor Vergata",
          subsections: [
            {
              subtitle: "Reputation and Rankings",
              content:
                "University of Rome Tor Vergata is known for its modern campus and academic excellence:\n- QS World University Rankings 2024: 511-520 globally.\n- Times Higher Education (THE) World University Rankings 2024: 401-500 globally.",
            },
            {
              subtitle: "Focus on Research and Innovation",
              content:
                "The university offers programs in engineering, economics, and the sciences and has a strong international orientation. Its modern campus and focus on research and innovation make it an attractive choice for students seeking a contemporary education.",
            },
            {
              subtitle: "International Orientation",
              content:
                "Tor Vergata is committed to fostering an international academic environment, with numerous programs taught in English and strong partnerships with universities around the world. This international focus enhances the educational experience and prepares students for global careers.",
            },
            {
              subtitle: "Notable Alumni",
              content:
                "Giovanni Tria: Economist and former Minister of Economy and Finance.\nFabrizio Curcio: Head of the Italian Civil Protection Department.\nEnrico Giovannini: Economist and Minister of Sustainable Infrastructures and Mobility.",
            },
          ],
        },
        {
          title: "Politecnico di Torino",
          subsections: [
            {
              subtitle: "Reputation and Rankings",
              content:
                "Politecnico di Torino is a leading technical university with a strong reputation in engineering and architecture:\n- QS World University Rankings 2024: 334th globally.\n- Times Higher Education (THE) World University Rankings 2024: 351-400 globally.",
            },
            {
              subtitle: "Excellence in Engineering and Architecture",
              content:
                "Politecnico di Torino is renowned for its programs in engineering and architecture. Its emphasis on research and collaboration with industry leaders makes it an attractive choice for students seeking practical and innovative education.",
            },
            {
              subtitle: "Strong Industry Connections",
              content:
                "The university's strong connections with industry ensure that students gain valuable practical experience through internships, projects, and collaborations. These connections also provide a pathway to successful careers in various engineering and architectural fields.",
            },
            {
              subtitle: "Notable Alumni",
              content:
                "Carlo De Benedetti: Entrepreneur and industrialist.\nRoberto Cingolani: Physicist and Minister for Ecological Transition.\nGianluca Vialli: Former professional footballer and manager.",
            },
          ],
        },
        {
          title: "University of Naples Federico II",
          subsections: [
            {
              subtitle: "Reputation and Rankings",
              content:
                "Founded in 1224, the University of Naples Federico II is one of the oldest public universities in the world:\n- QS World University Rankings 2024: 424th globally.\n- Times Higher Education (THE) World University Rankings 2024: 401-500 globally.",
            },
            {
              subtitle: "Historical Significance and Academic Excellence",
              content:
                "The University of Naples Federico II offers a wide range of programs and is known for its research in the sciences and engineering. Its long history and commitment to academic excellence make it a prominent institution in Italy and beyond.",
            },
            {
              subtitle: "Diverse Academic Programs",
              content:
                "The university offers programs in various fields, including humanities, sciences, engineering, and social sciences. Its focus on research and innovation ensures that students receive a comprehensive education that prepares them for successful careers.",
            },
            {
              subtitle: "Notable Alumni",
              content:
                "Giovanni Leone: Former President of Italy.\nGiorgio Napolitano: Former President of Italy.\nErnesto De Martino: Renowned anthropologist and historian.",
            },
          ],
        },
        {
          title: "University of Florence",
          subsections: [
            {
              subtitle: "Reputation and Rankings",
              content:
                "The University of Florence is a prominent institution with a strong focus on humanities, arts, and social sciences:\n- QS World University Rankings 2024: 451-500 globally.\n- Times Higher Education (THE) World University Rankings 2024: 401-500 globally.",
            },
            {
              subtitle: "Strengths in Humanities, Arts, and Social Sciences",
              content:
                "The University of Florence offers programs in art history, literature, and political science that are particularly well-regarded. Its commitment to academic excellence and research ensures that students receive a high-quality education.",
            },
            {
              subtitle: "Cultural and Historical Significance",
              content:
                "Studying in Florence, the cradle of the Renaissance, offers students a unique opportunity to immerse themselves in the city's rich cultural and historical heritage. The university's location provides unparalleled access to world-famous museums, galleries, and architectural landmarks.",
            },
            {
              subtitle: "Notable Alumni",
              content:
                "Leon Battista Alberti: Renaissance humanist, architect, and author.\nGiovanni Sartori: Political scientist and author.\nOrnella Vanoni: Acclaimed Italian singer and actress.",
            },
          ],
        },
      ],
      conclusion:
        "Italy's top universities offer a unique blend of historical significance, academic excellence, and vibrant cultural experiences. From the ancient halls of the University of Bologna to the cutting-edge research at Politecnico di Milano, Italy provides international students with a diverse and enriching educational journey. If you are considering studying abroad, Italy's prestigious institutions, affordable education, and welcoming environment make it an ideal destination. Start your application process today and embark on an unforgettable academic adventure in the heart of Europe.",
    },
    {
      id: 2,
      title: "Top Universities in Germany for International Students",
      author: "Mrinal Dawn",
      date: "2024-08-06",
      imageUrl: "https://via.placeholder.com/300x200",
      introduction:
        "Germany is renowned for its world-class universities, cutting-edge research, and vibrant student life. With a strong tradition of academic excellence, Germany attracts students from all over the world. This blog post explores the top ten universities in Germany, detailing their programs, campuses, research opportunities, and student life. We will also highlight their rankings, notable alumni, and unique features that make them attractive to international students.",
      sections: [
        {
          title: "Technical University of Munich (TUM)",
          subsections: [
            {
              subtitle: "Reputation and Rankings",
              content:
                "Technical University of Munich is one of Germany's top universities, particularly known for its engineering and technical programs:\n- QS World University Rankings 2024: 55th globally, 1st in Germany.\n- Times Higher Education (THE) World University Rankings 2024: 30th globally.",
            },
            {
              subtitle: "Programs and Research Opportunities",
              content:
                "TUM offers a wide range of programs in engineering, natural sciences, life sciences, and social sciences. The university emphasizes interdisciplinary research and collaboration with industry leaders, providing students with numerous opportunities for hands-on experience and innovation.",
            },
            {
              subtitle: "Campus and Student Life",
              content:
                "TUM's main campus is located in Munich, with additional campuses in Garching and Freising. The university provides state-of-the-art facilities, including advanced laboratories, research centers, and libraries. Munich's vibrant cultural scene and student-friendly environment make it an ideal place to study and live.",
            },
            {
              subtitle: "Notable Alumni",
              content:
                "Thomas Müller: Professional footballer.\nKarl Max von Bauernfeind: Mathematician and engineer.\nClaude Dornier: Aviation pioneer.",
            },
          ],
        },
        {
          title: "Ludwig Maximilian University of Munich (LMU)",
          subsections: [
            {
              subtitle: "Reputation and Rankings",
              content:
                "Ludwig Maximilian University of Munich is one of Germany's oldest and most prestigious universities:\n- QS World University Rankings 2024: 59th globally.\n- Times Higher Education (THE) World University Rankings 2024: 32nd globally.",
            },
            {
              subtitle: "Programs and Research Opportunities",
              content:
                "LMU offers a diverse array of programs in humanities, social sciences, natural sciences, and medicine. The university is renowned for its strong emphasis on research, with numerous research centers and collaborations with international institutions.",
            },
            {
              subtitle: "Campus and Student Life",
              content:
                "LMU's main campus is located in the heart of Munich, providing students with easy access to the city's cultural and social amenities. The university offers various student services, including academic advising, language courses, and cultural activities.",
            },
            {
              subtitle: "Notable Alumni",
              content:
                "Max Planck: Theoretical physicist and Nobel Prize winner.\nThomas Mann: Renowned novelist and Nobel Prize winner.\nSophie Scholl: Anti-Nazi political activist.",
            },
          ],
        },
        {
          title: "Heidelberg University",
          subsections: [
            {
              subtitle: "Reputation and Rankings",
              content:
                "Heidelberg University is Germany's oldest university and a leading institution in research and education:\n- QS World University Rankings 2024: 65th globally.\n- Times Higher Education (THE) World University Rankings 2024: 44th globally.",
            },
            {
              subtitle: "Programs and Research Opportunities",
              content:
                "Heidelberg University offers a wide range of programs in humanities, social sciences, natural sciences, and medicine. The university is known for its strong emphasis on interdisciplinary research and collaboration with international partners.",
            },
            {
              subtitle: "Campus and Student Life",
              content:
                "Heidelberg's picturesque campus is located in the historic city of Heidelberg, known for its charming old town and vibrant student life. The university provides various student services, including housing, counseling, and cultural activities.",
            },
            {
              subtitle: "Notable Alumni",
              content:
                "Robert Koch: Physician and Nobel Prize winner in Medicine.\nHannah Arendt: Political theorist and philosopher.\nCarl Bosch: Chemist and Nobel Prize winner.",
            },
          ],
        },
        {
          title: "Humboldt University of Berlin",
          subsections: [
            {
              subtitle: "Reputation and Rankings",
              content:
                "Humboldt University of Berlin is one of Germany's most prestigious universities, known for its strong academic tradition and research excellence:\n- QS World University Rankings 2024: 128th globally.\n- Times Higher Education (THE) World University Rankings 2024: 74th globally.",
            },
            {
              subtitle: "Programs and Research Opportunities",
              content:
                "Humboldt University offers a diverse array of programs in humanities, social sciences, natural sciences, and medicine. The university is renowned for its strong emphasis on research, with numerous research centers and collaborations with international institutions.",
            },
            {
              subtitle: "Campus and Student Life",
              content:
                "Humboldt's main campus is located in the heart of Berlin, providing students with easy access to the city's cultural and social amenities. The university offers various student services, including academic advising, language courses, and cultural activities.",
            },
            {
              subtitle: "Notable Alumni",
              content:
                "Albert Einstein: Theoretical physicist and Nobel Prize winner.\nKarl Marx: Philosopher and economist.\nFriedrich Engels: Social scientist and political theorist.",
            },
          ],
        },
        {
          title: "University of Freiburg",
          subsections: [
            {
              subtitle: "Reputation and Rankings",
              content:
                "University of Freiburg is a leading research university in Germany, known for its interdisciplinary approach to education:\n- QS World University Rankings 2024: 172nd globally.\n- Times Higher Education (THE) World University Rankings 2024: 101-125 globally.",
            },
            {
              subtitle: "Programs and Research Opportunities",
              content:
                "The University of Freiburg offers a wide range of programs in humanities, social sciences, natural sciences, and medicine. The university is known for its strong emphasis on research and collaboration with international partners.",
            },
            {
              subtitle: "Campus and Student Life",
              content:
                "Freiburg's picturesque campus is located in the historic city of Freiburg, known for its charming old town and vibrant student life. The university provides various student services, including housing, counseling, and cultural activities.",
            },
            {
              subtitle: "Notable Alumni",
              content:
                "Hermann Staudinger: Chemist and Nobel Prize winner.\nMartin Heidegger: Philosopher.\nHans Spemann: Embryologist and Nobel Prize winner.",
            },
          ],
        },
        {
          title: "RWTH Aachen University",
          subsections: [
            {
              subtitle: "Reputation and Rankings",
              content:
                "RWTH Aachen University is a leading technical university in Germany, known for its engineering and technology programs:\n- QS World University Rankings 2024: 145th globally.\n- Times Higher Education (THE) World University Rankings 2024: 108th globally.",
            },
            {
              subtitle: "Programs and Research Opportunities",
              content:
                "RWTH Aachen offers a wide range of programs in engineering, natural sciences, and technology. The university emphasizes interdisciplinary research and collaboration with industry leaders, providing students with numerous opportunities for hands-on experience and innovation.",
            },
            {
              subtitle: "Campus and Student Life",
              content:
                "Aachen's main campus is located in the historic city of Aachen, known for its charming old town and vibrant student life. The university provides various student services, including housing, counseling, and cultural activities.",
            },
            {
              subtitle: "Notable Alumni",
              content:
                "Peter Debye: Physicist and Nobel Prize winner.\nHelmut Zahn: Chemist and pioneer in polymer science.\nFerdinand Porsche: Automotive engineer and founder of Porsche AG.",
            },
          ],
        },
        {
          title: "University of Göttingen",
          subsections: [
            {
              subtitle: "Reputation and Rankings",
              content:
                "University of Göttingen is a leading research university in Germany, known for its strong academic tradition and research excellence:\n- QS World University Rankings 2024: 215th globally.\n- Times Higher Education (THE) World University Rankings 2024: 119th globally.",
            },
            {
              subtitle: "Programs and Research Opportunities",
              content:
                "The University of Göttingen offers a diverse array of programs in humanities, social sciences, natural sciences, and medicine. The university is renowned for its strong emphasis on research, with numerous research centers and collaborations with international institutions.",
            },
            {
              subtitle: "Campus and Student Life",
              content:
                "Göttingen's picturesque campus is located in the historic city of Göttingen, known for its charming old town and vibrant student life. The university provides various student services, including housing, counseling, and cultural activities.",
            },
            {
              subtitle: "Notable Alumni",
              content:
                "Max Born: Physicist and Nobel Prize winner.\nOtto von Bismarck: First Chancellor of the German Empire.\nWilhelm von Humboldt: Linguist and founder of Humboldt University of Berlin.",
            },
          ],
        },
        {
          title: "University of Stuttgart",
          subsections: [
            {
              subtitle: "Reputation and Rankings",
              content:
                "University of Stuttgart is a leading technical university in Germany, known for its engineering and technology programs:\n- QS World University Rankings 2024: 279th globally.\n- Times Higher Education (THE) World University Rankings 2024: 251-300 globally.",
            },
            {
              subtitle: "Programs and Research Opportunities",
              content:
                "The University of Stuttgart offers a wide range of programs in engineering, natural sciences, and technology. The university emphasizes interdisciplinary research and collaboration with industry leaders, providing students with numerous opportunities for hands-on experience and innovation.",
            },
            {
              subtitle: "Campus and Student Life",
              content:
                "Stuttgart's main campus is located in the vibrant city of Stuttgart, known for its automotive industry and cultural scene. The university provides various student services, including housing, counseling, and cultural activities.",
            },
            {
              subtitle: "Notable Alumni",
              content:
                "Gottlieb Daimler: Engineer and pioneer in automotive engineering.\nFerdinand von Zeppelin: Aviation pioneer and founder of the Zeppelin airship company.\nRobert Bosch: Industrialist and founder of Robert Bosch GmbH.",
            },
          ],
        },
        {
          title: "University of Tübingen",
          subsections: [
            {
              subtitle: "Reputation and Rankings",
              content:
                "University of Tübingen is a leading research university in Germany, known for its strong academic tradition and research excellence:\n- QS World University Rankings 2024: 177th globally.\n- Times Higher Education (THE) World University Rankings 2024: 78th globally.",
            },
            {
              subtitle: "Programs and Research Opportunities",
              content:
                "The University of Tübingen offers a diverse array of programs in humanities, social sciences, natural sciences, and medicine. The university is renowned for its strong emphasis on research, with numerous research centers and collaborations with international institutions.",
            },
            {
              subtitle: "Campus and Student Life",
              content:
                "Tübingen's picturesque campus is located in the historic city of Tübingen, known for its charming old town and vibrant student life. The university provides various student services, including housing, counseling, and cultural activities.",
            },
            {
              subtitle: "Notable Alumni",
              content:
                "Friedrich Hegel: Philosopher.\nJohannes Kepler: Astronomer and mathematician.\nJoseph Alois Schumpeter: Economist and political scientist.",
            },
          ],
        },
        {
          title: "Free University of Berlin",
          subsections: [
            {
              subtitle: "Reputation and Rankings",
              content:
                "Free University of Berlin is a leading research university in Germany, known for its strong academic tradition and research excellence:\n- QS World University Rankings 2024: 130th globally.\n- Times Higher Education (THE) World University Rankings 2024: 83rd globally.",
            },
            {
              subtitle: "Programs and Research Opportunities",
              content:
                "The Free University of Berlin offers a diverse array of programs in humanities, social sciences, natural sciences, and medicine. The university is renowned for its strong emphasis on research, with numerous research centers and collaborations with international institutions.",
            },
            {
              subtitle: "Campus and Student Life",
              content:
                "The Free University's main campus is located in the vibrant city of Berlin, providing students with easy access to the city's cultural and social amenities. The university offers various student services, including academic advising, language courses, and cultural activities.",
            },
            {
              subtitle: "Notable Alumni",
              content:
                "Jürgen Habermas: Philosopher and sociologist.\nAngela Merkel: Chancellor of Germany.\nRudi Dutschke: Sociologist and political activist.",
            },
          ],
        },
      ],
      conclusion:
        "Germany is home to some of the world's most prestigious universities, offering high-quality education, cutting-edge research opportunities, and vibrant student life. From the Technical University of Munich to the Free University of Berlin, these institutions provide international students with a diverse and enriching educational experience. If you are considering studying abroad, Germany's top universities, strong economy, and welcoming environment make it an ideal destination. Start exploring your options today and embark on an exciting academic journey in one of the most dynamic and innovative countries in the world.",
    },
    {
      id: 3,
      title:
        "Why Study in Germany? An Overview of Benefits for International Students",
      author: "Author Name",
      date: "2024-08-07",
      imageUrl: "https://via.placeholder.com/300x200",
      introduction:
        "Germany, a country known for its rich history, cultural diversity, and technological advancements, is also a leading destination for higher education. With its world-class universities, cutting-edge research facilities, and vibrant student life, Germany offers an unparalleled experience for international students. This blog post will explore the numerous advantages of studying in Germany, including high-quality education, research opportunities, low or no tuition fees, a strong economy, an international environment, and promising post-graduation job prospects.",
      sections: [
        {
          title: "High-Quality Education",
          subsections: [
            {
              subtitle: "Renowned Universities",
              content:
                "Germany is home to some of the most prestigious universities in the world, such as the University of Heidelberg, Ludwig Maximilian University of Munich, and Technical University of Munich. These institutions consistently rank high in global university rankings and are known for their academic excellence and rigorous standards.",
            },
            {
              subtitle: "Wide Range of Programs",
              content:
                "German universities offer a diverse array of programs in various fields, including engineering, natural sciences, social sciences, humanities, and arts. Many programs are available in English, making it easier for international students to adapt and succeed.",
            },
            {
              subtitle: "Emphasis on Practical Learning",
              content:
                "German education emphasizes a balance between theoretical knowledge and practical experience. Many universities collaborate with industries and research institutions, providing students with opportunities to gain hands-on experience through internships, projects, and work-study programs.",
            },
          ],
        },
        {
          title: "Cutting-Edge Research Opportunities",
          subsections: [
            {
              subtitle: "Leading Research Institutions",
              content:
                "Germany is a global leader in research and innovation, with numerous research institutions such as the Max Planck Society, Fraunhofer Institutes, and Helmholtz Association. These institutions conduct groundbreaking research in various fields, from physics and chemistry to engineering and life sciences.",
            },
            {
              subtitle: "Access to Advanced Facilities",
              content:
                "Students in Germany have access to state-of-the-art laboratories, libraries, and research centers. This access allows them to engage in cutting-edge research and collaborate with leading scientists and scholars worldwide.",
            },
            {
              subtitle: "Funding and Support",
              content:
                "Germany offers numerous funding opportunities for research, including scholarships, grants, and fellowships from organizations such as the German Academic Exchange Service (DAAD) and the Alexander von Humboldt Foundation. These funding options make it easier for international students to pursue their research interests.",
            },
          ],
        },
        {
          title: "Low or No Tuition Fees",
          subsections: [
            {
              subtitle: "Affordable Education",
              content:
                "One of the most significant advantages of studying in Germany is the low or no tuition fees at public universities. Most public universities charge only a nominal semester fee, which covers administrative costs and provides access to various student services.",
            },
            {
              subtitle: "Cost of Living",
              content:
                "While the cost of living in Germany can vary depending on the city, it is generally affordable compared to other popular study destinations like the USA and the UK. Students can find reasonably priced accommodation, food, and transportation, making it easier to manage their finances.",
            },
            {
              subtitle: "Scholarships and Financial Aid",
              content:
                "Germany offers various scholarships and financial aid options for international students. Organizations such as the DAAD provide scholarships based on academic merit and financial need, helping to make education more accessible.",
            },
          ],
        },
        {
          title: "Strong Economy and Job Prospects",
          subsections: [
            {
              subtitle: "Thriving Economy",
              content:
                "Germany has one of the strongest economies in the world, known for its robust industrial base and innovation-driven growth. The country's economic stability and growth provide a conducive environment for education and career development.",
            },
            {
              subtitle: "Post-Graduation Job Opportunities",
              content:
                "Germany offers excellent job prospects for graduates, with numerous multinational companies and startups operating in the country. Sectors such as engineering, information technology, automotive, and healthcare are particularly strong, providing ample job opportunities for skilled professionals.",
            },
            {
              subtitle: "Work Permit and Residency Options",
              content:
                "International students can benefit from favorable work permit and residency regulations in Germany. Graduates from German universities are allowed to stay in the country for up to 18 months to find a job related to their field of study. Furthermore, after gaining relevant work experience, they can apply for a permanent residence permit.",
            },
          ],
        },
        {
          title: "International Environment",
          subsections: [
            {
              subtitle: "Diverse Student Community",
              content:
                "Germany attracts students from all over the world, creating a multicultural and inclusive environment. This diversity enriches the student experience and promotes cross-cultural understanding and collaboration.",
            },
            {
              subtitle: "Support Services for International Students",
              content:
                "German universities provide extensive support services for international students, including orientation programs, language courses, academic advising, and cultural activities. These services help students adapt to their new environment and succeed in their studies.",
            },
            {
              subtitle: "Opportunities for Networking",
              content:
                "Studying in Germany provides numerous opportunities for networking with peers, professors, and industry professionals. Students can attend conferences, workshops, and seminars, as well as join student organizations and clubs, to build valuable connections that can benefit their future careers.",
            },
          ],
        },
      ],
      conclusion:
        "Germany offers a wealth of opportunities for international students, from high-quality education and cutting-edge research to affordable living and excellent job prospects. With its strong economy, international environment, and support services, Germany is an ideal destination for those seeking a world-class education and a promising future. If you are considering studying abroad, Germany should be at the top of your list. Start exploring your options today and embark on an exciting academic journey in one of the most dynamic and innovative countries in the world.",
    },
  ];

  return (
    <section className="py-16 bg-gray-50 lg:px-24">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-semibold text-gray-800 font-poppins">
            Our Blog
          </h2>
          <p className="mt-4 text-gray-600 font-poppins">
            Welcome to the Destiny Euro Blog! Here, you'll find a wealth of
            information, insights, and tips about studying in Europe. From
            student experiences to application advice and travel tips, our blog
            is your go-to resource for all things related to studying abroad.
          </p>
        </div>
        <div className="grid grid-cols-1  gap-8">
          {blogPosts.map((post) => (
            <div
              key={post.id}
              className="bg-white p-6 rounded-lg shadow-lg flex flex-col lg:flex-row"
            >
              <div className="lg:w-2/3">
                <h3 className="text-2xl font-semibold text-gray-800 mb-2 font-poppins">
                  {post.title}
                </h3>
                <p className="text-gray-600 mb-4">
                  By {post.author} on {post.date}
                </p>
                <p className="text-gray-600 font-poppins">
                  {post.introduction}
                </p>
                <button className="mt-4 text-blue-600 hover:underline font-poppins">
                  Read more
                </button>
              </div>
              <div className="lg:w-1/3 lg:pl-4 mt-4 lg:mt-0">
                <img
                  src={post.imageUrl}
                  alt={post.title}
                  className="rounded-lg shadow-lg"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Blog;
