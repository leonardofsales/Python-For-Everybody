myData = [
[42.340082,-71.0894884, 'Northeastern, Boston, MA 02115, USA'],
[40.7399972,-74.1775311, 'Bradley Hall, 110 Warren St, Newark, NJ 07102, USA'],
[32.776653,35.020411, 'Technion/Dormitories, Haifa'],
[18.4596142,73.8854376, 'Vishwakarma Institute of Information Technology, Survey No. 2/3/4, VIM Private Rd, Kapil Nagar, Kondhwa, Pune, Maharashtra 411048, India'],
[33.1561058,131.826132, 'Japan, 〒875-0002 Ōita-ken, Usuki-shi, Shitanoe, 1232−2, ＵＭＤ'],
[42.4036848,-71.120482, 'South Hall Tufts University, 30 Lower Campus Rd, Somerville, MA 02144, USA'],
[-38.15186,145.1348138, 'Monash University, Frankston VIC 3199, Australia'],
[53.2948229,69.4047872, 'Kokshetau 020000, Kazakhstan'],
[40.7127837,-74.0059413, 'New York, NY, USA'],
[52.2869741,104.3050183, 'Irkutsk, Irkutsk Oblast, Russia'],
[8.481302,4.611479, 'University Rd, Ilorin, Nigeria'],
[-25.7688448,28.199104, 'Unisa Observatory Building, Preller St, Pretoria, 0027, South Africa'],
[47.80949,13.05501, 'Salzburg, Austria'],
[61.4977524,23.7609535, 'Tampere, Finland'],
[27.7518284,-82.6267345, 'St. Petersburg, FL, USA'],
[54.7903112,32.0503663, 'Smolensk, Smolensk Oblast, Russia'],
[24.8614622,67.0099388, 'Karachi, Pakistan'],
[40.506934,-3.3458886, 'Ctra. Universidad Complutense, 28805 Alcalá de Henares, Madrid, Spain'],
[24.4325423,54.6174842, 'Masdar Institute Bus Station - Abu Dhabi - United Arab Emirates'],
[51.5266171,-0.1260773, 'University Of London, 1-11 Cartwright Gardens, Kings Cross, London WC1H 9EB, UK'],
[39.5069974,-84.745231, 'Oxford, OH 45056, USA'],
[59.393847,24.6650872, 'TTÜ staadion, 12616 Tallinn, Estonia'],
[58.3733281,26.7265098, 'Tartu Ülikooli Füüsikahoone, 50103 Tartu, Estonia'],
[33.6778327,-117.8151285, 'Padua, Irvine, CA 92614, USA'],
[18.5544976,73.8257325, 'Pune University, Ganeshkhind, Pune, Maharashtra, India'],
[37.8805941,-122.2447958, 'Space Sciences Laboratory at University of California, 7 Gauss Way, Berkeley, CA 94720, USA'],
[43.0765915,-89.4052247, 'William H. Sewell Social Sciences Building, 1180 Observatory Dr, Madison, WI 53706, USA'],
[51.745806,19.4489068, 'Instytut Informatyki Stosowanej, Politechnika Łódzka, 90-924 Łódź, Poland'],
[38.3946981,27.0322689, 'İnciraltı, Dokuz Eylül Ünv. Hst., 35330 Balçova/İzmir, Turkey'],
[39.9622267,116.3659223, 'Bei Jing Shi Fan Da Xue, BeiTaiPingZhuang, Haidian Qu, Beijing Shi, China, 100875'],
[33.9519347,-83.357567, 'Athens, GA, USA'],
[10.7295115,79.0196067, 'Sastra University Road, Tirumalaisamudram, Tamil Nadu 613401, India'],
[21.1470404,79.0397862, 'Nagpur University Campus, Nagpur, Maharashtra 440033, India'],
[41.9197689,-91.649501, 'Duke St SW, Cedar Rapids, IA 52404, USA'],
[37.7244047,-122.4760196, 'San Francisco State University, Greenhouse 2, 1600 Holloway Ave, San Francisco, CA 94132, USA'],
[-23.5505199,-46.6333094, 'São Paulo, State of São Paulo, Brazil'],
[30.2850284,-97.7335226, 'University of Texas at Austin, Austin, TX, USA'],
[61.6887271,27.2721457, 'Mikkeli, Finland'],
[32.4204729,-85.0323718, 'H. Curtis Pitts Hall, 3413 S Seale Rd, Phenix City, AL 36869, USA'],
[41.557583,-8.397568, 'Universidade do Minho, 4710 Braga, Portugal'],
[-33.0444219,-71.6066334, 'Pontificia Universidad Catolica De Valparaiso - Gimpert, Valparaíso, Región de Valparaíso, Chile'],
[40.6331249,-89.3985283, 'Illinois, USA'],
[30.0180285,31.5032758, 'AUC Sports Center, Cairo Governorate, Egypt'],
[55.1170375,36.5970818, 'Obninsk, Kaluga Oblast, Russia'],
[37.670874,-97.326278, 'Washington, Wichita, KS, USA'],
[49.9935,36.230383, 'Kharkiv, Kharkiv Oblast, Ukraine'],
[43.8562586,18.4130763, 'Sarajevo, Bosnia and Herzegovina'],
[3.4321247,-76.5461709, 'Parqueadero Universidad Del Valle, Cali, Valle del Cauca, Colombia'],
[40.0082221,-105.2591119, 'Colorado Ave & University Heights, Boulder, CO 80302, USA'],
[53.4129429,59.0016233, 'Magnitogorsk, Chelyabinsk Oblast, Russia'],
[27.5695246,-99.4350626, 'Senator Judith Zaffirini Student Success Center, Laredo, TX 78041, USA'],
[52.124815,-106.589195, 'Simon Fraser Crescent, Saskatoon, SK S7H, Canada'],
[40.807722,-73.96411, '116 St - Columbia University, New York, NY 10027, USA'],
[34.1036186,-117.2914463, 'American Heritage University of Southern California, 255 N D St, San Bernardino, CA 92401, USA'],
[43.1827984,-77.5993071, 'Warsaw St, Rochester, NY 14621, USA'],
[52.2296756,21.0122287, 'Warsaw, Poland'],
[-40.900557,174.885971, 'New Zealand'],
[-40.3850866,175.6140639, 'Massey University, Palmerston North, New Zealand'],
[35.1924456,-97.4432884, 'University of Oklahoma, Norman, OK 73072, USA'],
[45.1847248,9.1582069, '27100 Pavia PV, Italy'],
[38.6598662,-90.3123536, 'Columbia Ave, University City, MO 63130, USA'],
[50.0755381,14.4378005, 'Prague, Czech Republic'],
[41.8313852,-87.6272216, 'Iit Tower, 10 W 35th St, Chicago, IL 60616, USA'],
[40.8072337,-77.8608888, 'Penn State University, College Township, PA 16802, USA'],
[40.7609264,-111.8270486, 'University, Salt Lake City, UT, USA'],
[39.4813156,-0.3505, 'Universitat Politècnica, 46022 Valencia, Spain'],
[33.6140008,-117.8440006, 'Vienna, Newport Beach, CA 92660, USA'],
[44.4267674,26.1025384, 'Bucharest, Romania'],
[33.7063317,-117.7733121, 'New Haven, Irvine, CA 92620, USA'],
[47.761605,-122.19303, 'UW Bothell & Cascadia College, Bothell, WA 98011, USA'],
[38.6679152,-90.3322259, 'Drexel Dr, University City, MO 63130, USA'],
[42.320138,-83.230993, 'University of Michigan, Dearborn, MI 48128, USA'],
[40.4432289,-79.9441368, 'Carnegie Mellon University, Pausch Bridge, Pittsburgh, PA 15213, USA'],
[55.8304307,49.0660806, 'Kazan, Tatarstan, Russia'],
[12.0263438,79.8492812, 'Pondicherry University, Kalapet, Puducherry 605014, India'],
[30.7897514,120.7760636, 'Jia Xing Nan Yang Zhi Ye Ji Shu Xue Yuan, Xiuzhou Qu, Jiaxing Shi, Zhejiang Sheng, China, 314000'],
[35.712815,135.9711705, 'Nyu, Mihama, Mikata District, Fukui Prefecture 919-1201, Japan'],
[-23.5431786,-46.6291845, 'State of São Paulo, Brazil'],
[47.5584793,21.620443, 'Debrecen, Debrecen University-Botanical Garden, 4032 Hungary'],
[34.0713917,-117.2957428, 'San Bernardino Fwy, San Bernardino, CA 92408, USA'],
[50.4501,30.5234, 'Kiev, Ukraine, 02000'],
[46.4618977,-80.9664534, 'University Laurentian, Copper Cliff, ON P0M 1N0, Canada'],
[55.755826,37.6173, 'Moscow, Russia'],
[52.2016671,0.1177882, 'University Of Cambridge, Cambridge CB2, UK'],
[35.9525664,51.490619, 'Payame Noor, Meygun, Tehran Province, Iran'],
[35.246756,33.0307541, 'ODTÜ Misafirhane, Kalkanlı'],
[46.5189865,6.5676007, 'EPFL, 1015 Lausanne, Switzerland'],
[45.2671352,19.8335496, 'Novi Sad, Serbia'],
[57.6954209,11.9853213, 'Göteborgs universitetsbibliotek, Renströmsgatan 4, 412 55 Göteborg, Sweden'],
[45.7488716,21.2086793, 'Timișoara, Romania'],
[53.8931837,27.547338, 'Monument to Fallen Professors and Students of the Belarusian State University, Minsk, Belarus'],
[22.4828735,88.394867, 'Jadavpur University Lake, Sahid Smirity Colony, Pancha Sayar, Kolkata, West Bengal 700094'],
[26.1529683,91.6639235, 'Gauhati University, Jalukbari, Guwahati, Assam, India'],
[-34.5101473,-58.6864035, 'Universidad de Buenos Aires, Villa de Mayo, Buenos Aires, Argentina'],
[44.4046049,8.9311653, 'Centro servizi bibliotecari di architettura Nino Carboneri dellUniversità degli studi di Genova, Stradone di SantAgostino, 37, 16123 Genova, Italy'],
[4.8602595,-74.0333032, 'Universidad De La Sabana, Chía, Cundinamarca, Colombia'],
[41.6828074,-88.3514596, 'Oswego, IL, USA'],
[16.9785466,82.2406733, 'Jawaharlal Nehru Technological University, Kakinada, Andhra Pradesh 533003, India'],
[50.503887,4.469936, 'Belgium'],
[51.4925846,-0.1852592, 'Boston University, 43 Harrington Gardens, Kensington, London SW7 4JU, UK'],
[64.9078809,-147.7117155, 'Manchester Loop, Fairbanks, AK 99712, USA'],
[51.1877226,6.7938734, 'Fachhochschule Düsseldorf, 40225 Düsseldorf, Germany'],
[10.4902362,-68.1835713, 'Aldea Universitaria Simón Bolívar, Morón, Carabobo, Venezuela'],
[39.1863846,-86.5345782, 'Indiana 45 46 Bypass & N College Ave, Bloomington, IN 47404, USA'],
[51.3880426,-0.495188, 'R P I House, 53 Stepgates, Chertsey KT16 8HT, UK'],
[45.4248599,-75.6828, 'University of Ottawa Press, 542 King Edward Ave, Ottawa, ON K1N 6N5, Canada'],
[28.3580163,75.5887989, 'BITS, Pilani, Rajasthan 333031, India'],
[38.0517783,-84.4923513, 'Lucille C. Little Theater, Lexington, KY 40508, USA'],
[25.25968,82.989115, 'IIT Gymkhana, RR 11, Banaras Hindu University Campus, Varanasi, Uttar Pradesh 221001, India'],
[50.862282,-2.4998561, 'E M Mitchell & Sons, Hermitage, Dorchester DT2 7BB, UK'],
[10.1464162,-64.6955802, 'Universidad Central de Venezuela EUS Educación Barcelona, Av Centurión, Barcelona, Anzoátegui, Venezuela'],
[50.4471975,30.4522355, 'Obshchezhitiye NTUU KPI №10, Vyborzka St, 2/24, Kyiv, Ukraine'],
[-9.9541653,-67.8384015, 'Tv. Paraíba - Geraldo Fleming, Rio Branco - AC, Brazil'],
[47.497912,19.040235, 'Budapest, Hungary'],
[55.755826,37.6173, 'Moscow, Russia'],
[27.7518284,-82.6267345, 'St. Petersburg, FL, USA'],
[41.7508391,-88.1535352, 'Naperville, IL, USA'],
[37.424106,-122.1660756, 'Stanford, CA, USA'],
[45.7484997,21.2399277, 'Cantina Politehnică, Strada Alexandru Vaida - Voievod, Timișoara, Romania'],
[29.1891714,-81.0469168, 'Lehman Engineering & Technology Center, 600 S Clyde Morris Blvd, Daytona Beach, FL 32114, USA'],
[-35.417,149.1, 'Monash ACT 2904, Australia'],
[-7.2159454,-35.9065247, 'Campo da UFCG - R. Silva Barbosa - Universitário, Campina Grande - PB, 58400-850, Brazil'],
[19.3188895,-99.1843676, 'National Autonomous University of Mexico, Mexico City, Mexico'],
[35.7058075,51.4020909, 'Tehran University, Tehran, Tehran Province, Iran'],
[36.8838957,-76.3040214, 'Old Dominion University, 5115 Hampton Blvd, Norfolk, VA 23508, USA'],
[50.4501,30.5234, 'Kiev, Ukraine, 02000'],
[40.0997009,-88.2209362, 'Babcock Hall, 906 W College Ct, Urbana, IL 61801, USA'],
[40.0024922,-83.0524629, 'Essex Rd, Columbus, OH 43221, USA'],
[49.9935,36.230383, 'Kharkiv, Kharkiv Oblast, Ukraine'],
[27.6027172,-99.4687146, 'Buenos Aires Dr, Laredo, TX 78045, USA'],
[9.7297203,79.9482992, 'Jaffna College, AB21, Sri Lanka'],
[42.5030209,-89.0295642, 'College St, Beloit, WI 53511, USA'],
[40.5382913,-78.3528584, 'Ucla Ln, Altoona, PA 16602, USA'],
[41.7857416,-87.5903039, 'The University of Chicago Press, 1427 E 60th St, Chicago, IL 60637, USA'],
[30.5848529,31.4843221, 'Rd inside Zagazig University, Shaibet an Nakareyah, Markaz El-Zakazik, Ash Sharqia Governorate, Egypt'],
[53.4943212,-113.5490268, 'University of Alberta Farm, Edmonton, AB T6H, Canada'],
[53.8931837,27.547338, 'Monument to Fallen Professors and Students of the Belarusian State University, Minsk, Belarus'],
[28.0735403,-82.4373589, 'University, FL, USA'],
[8.5053554,76.9484624, 'University of Kerala Senate House Campus, Palayam, Thiruvananthapuram, Kerala, India'],
[45.4723514,9.1964401, 'Via del Vecchio Politecnico, 20121 Milano, Italy'],
[54.6871555,25.2796514, 'Vilnius, Lithuania'],
[20.593684,78.96288, 'India'],
[-33.8812733,18.6264694, 'Stellenbosch University, Cape Town, 7530, South Africa'],
[28.6777345,77.4504666, 'IMT Rd, Block 14, Sector 10, Raj Nagar, Ghaziabad, Uttar Pradesh 201002, India'],
[41.2033216,-77.1945247, 'Pennsylvania, USA'],
[31.3260152,75.5761829, 'Jalandhar, Punjab 144001, India'],
[36.8743583,-76.1745441, 'Virginia Tech Trail, Virginia Beach, VA 23455, USA'],
[33.4205343,-111.9339825, 'Old Main at Arizona State University, 400 E Tyler Mall, Tempe, AZ 85281, USA'],
[20.5706831,-100.4028435, 'Guatemala, Santiago de Querétaro, Qro., Mexico'],
[54.6871555,25.2796514, 'Vilnius, Lithuania'],
[1.2246216,19.7878159, 'Basankusu Airport (BSU), N22, Basankusu, Democratic Republic of the Congo'],
[51.165691,10.451526, 'Germany'],
[30.0742446,31.2765847, 'Internal Medicine, Ain Shams University, ممر خاص مستشفى الدمرداش، Al Waili, Cairo Governorate, Egypt'],
[27.7518284,-82.6267345, 'St. Petersburg, FL, USA'],
[10.1345309,-85.4467445, 'Universidad Nacional, 150, Provincia de Guanacaste, Nicoya, Costa Rica'],
[33.952602,-84.5499327, 'Marietta, GA, USA'],
[42.9097484,-85.7630885, 'Grandville, MI, USA'],
[34.3020001,48.8145943, 'Malayer, Hamadan Province, Iran'],
[-23.3284985,-51.2082234, 'UNIVERSIDADE, Londrina - PR, Brazil'],
[-14.235004,-51.92528, 'Brazil']
];
