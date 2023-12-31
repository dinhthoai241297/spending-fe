const datas = [
    {
        "id": 1,
        "name": "Airi",
        "icon": "/games/130_120.jpg",
        "info1": "Nữ",
        "info2": "Đấu sĩ, Sát thủ",
        "info3": "Không",
        "info4": "Đảo Sương Mù",
        "info5": "2017",
        "info6": "14",
        "__typename": "Hero"
    },
    {
        "id": 2,
        "name": "Aleister",
        "icon": "/games/156_120.jpg",
        "info1": "Nam",
        "info2": "Pháp sư",
        "info3": "Mana",
        "info4": "Vực Hỗn Mang",
        "info5": "2016",
        "info6": "9",
        "__typename": "Hero"
    },
    {
        "id": 3,
        "name": "Alice",
        "icon": "/games/118_120.jpg",
        "info1": "Nữ",
        "info2": "Trợ thủ",
        "info3": "Mana",
        "info4": "Norman",
        "info5": "2016",
        "info6": "11",
        "__typename": "Hero"
    },
    {
        "id": 4,
        "name": "Allain",
        "icon": "/games/537_120.jpg",
        "info1": "Nam",
        "info2": "Đấu sĩ",
        "info3": "Không",
        "info4": "Tân Liên Hiệp",
        "info5": "2020",
        "info6": "7",
        "__typename": "Hero"
    },
    {
        "id": 5,
        "name": "Amily",
        "icon": "/games/193_120.jpg",
        "info1": "Nữ",
        "info2": "Đấu sĩ",
        "info3": "Mana",
        "info4": "Tân Liên Hiệp",
        "info5": "2018",
        "info6": "8",
        "__typename": "Hero"
    },
    {
        "id": 6,
        "name": "Annette",
        "icon": "/games/519_120.jpg",
        "info1": "Nữ",
        "info2": "Pháp sư, Trợ thủ",
        "info3": "Mana",
        "info4": "Học Viện Carano",
        "info5": "2018",
        "info6": "10",
        "__typename": "Hero"
    },
    {
        "id": 7,
        "name": "Aoi",
        "icon": "/games/536_120.jpg",
        "info1": "Nữ",
        "info2": "Sát thủ",
        "info3": "Không",
        "info4": "Đảo Sương Mù",
        "info5": "2021",
        "info6": "6",
        "__typename": "Hero"
    },
    {
        "id": 8,
        "name": "Arduin",
        "icon": "/games/126_120.jpg",
        "info1": "Nam",
        "info2": "Đấu sĩ, Đỡ đòn",
        "info3": "Mana",
        "info4": "Vực Hỗn Mang",
        "info5": "2017",
        "info6": "6",
        "__typename": "Hero"
    },
    {
        "id": 9,
        "name": "Arthur",
        "icon": "/games/166_120.jpg",
        "info1": "Nam",
        "info2": "Đấu sĩ",
        "info3": "Không",
        "info4": "Vương Quốc Okka",
        "info5": "2017",
        "info6": "9",
        "__typename": "Hero"
    },
    {
        "id": 10,
        "name": "Arum",
        "icon": "/games/187_120.jpg",
        "info1": "Nữ",
        "info2": "Đỡ đòn, Trợ thủ",
        "info3": "Mana",
        "info4": "Rừng Nguyên Sinh",
        "info5": "2018",
        "info6": "9",
        "__typename": "Hero"
    },
    {
        "id": 11,
        "name": "Astrid",
        "icon": "/games/502_120.jpg",
        "info1": "Nữ",
        "info2": "Đấu sĩ, Sát thủ",
        "info3": "Mana",
        "info4": "Norman",
        "info5": "2017",
        "info6": "7",
        "__typename": "Hero"
    },
    {
        "id": 12,
        "name": "Ata",
        "icon": "/games/511_120.jpg",
        "info1": "Nam",
        "info2": "Đỡ đòn",
        "info3": "Không",
        "info4": "Học Viện Carano",
        "info5": "2020",
        "info6": "6",
        "__typename": "Hero"
    },
    {
        "id": 13,
        "name": "Aya",
        "icon": "/games/543_120.jpg",
        "info1": "Nữ",
        "info2": "Trợ thủ",
        "info3": "Mana",
        "info4": "Rừng Nguyên Sinh",
        "info5": "2021",
        "info6": "4",
        "__typename": "Hero"
    },
    {
        "id": 14,
        "name": "Azzen'Ka",
        "icon": "/games/127_120.jpg",
        "info1": "Không xác định",
        "info2": "Pháp sư",
        "info3": "Mana",
        "info4": "Helios",
        "info5": "2016",
        "info6": "4",
        "__typename": "Hero"
    },
    {
        "id": 15,
        "name": "Baldum",
        "icon": "/games/505_120.jpg",
        "info1": "Không xác định",
        "info2": "Đỡ đòn, Trợ thủ",
        "info3": "Mana",
        "info4": "Rừng Nguyên Sinh",
        "info5": "2018",
        "info6": "5",
        "__typename": "Hero"
    },
    {
        "id": 16,
        "name": "Bijan",
        "icon": "/games/541_120.jpg",
        "info1": "Nam",
        "info2": "Đấu sĩ",
        "info3": "Mana",
        "info4": "Helios",
        "info5": "2023",
        "info6": "3",
        "__typename": "Hero"
    },
    {
        "id": 17,
        "name": "Bonnie",
        "icon": "/games/548_120.jpg",
        "info1": "Nữ",
        "info2": "Pháp sư",
        "info3": "Mana",
        "info4": "Tân Liên Hiệp",
        "info5": "2023",
        "info6": "2",
        "__typename": "Hero"
    },
    {
        "id": 18,
        "name": "Bright",
        "icon": "/games/540_120.jpg",
        "info1": "Nam",
        "info2": "Sát thủ",
        "info3": "Mana",
        "info4": "Tháp Quang Minh",
        "info5": "2020",
        "info6": "6",
        "__typename": "Hero"
    },
    {
        "id": 19,
        "name": "Butterfly",
        "icon": "/games/116_120.jpg",
        "info1": "Nữ",
        "info2": "Đấu sĩ, Sát thủ",
        "info3": "Không",
        "info4": "Norman",
        "info5": "2016",
        "info6": "14",
        "__typename": "Hero"
    },
    {
        "id": 20,
        "name": "Capheny",
        "icon": "/games/524_120.jpg",
        "info1": "Nữ",
        "info2": "Xạ thủ",
        "info3": "Nội năng",
        "info4": "Tân Liên Hiệp",
        "info5": "2019",
        "info6": "10",
        "__typename": "Hero"
    },
    {
        "id": 21,
        "name": "Celica",
        "icon": "/games/192_120.jpg",
        "info1": "Nữ",
        "info2": "Xạ thủ",
        "info3": "Mana",
        "info4": "Tân Liên Hiệp",
        "info5": "2019",
        "info6": "4",
        "__typename": "Hero"
    },
    {
        "id": 22,
        "name": "Chaugnar",
        "icon": "/games/113_120.jpg",
        "info1": "Không xác định",
        "info2": "Đỡ đòn, Trợ thủ",
        "info3": "Mana",
        "info4": "Chưa rõ",
        "info5": "2016",
        "info6": "4",
        "__typename": "Hero"
    },
    {
        "id": 23,
        "name": "Cresht",
        "icon": "/games/171_120.jpg",
        "info1": "Không xác định",
        "info2": "Đỡ đòn, Trợ thủ",
        "info3": "Không",
        "info4": "Rừng Nguyên Sinh",
        "info5": "2016",
        "info6": "4",
        "__typename": "Hero"
    },
    {
        "id": 24,
        "name": "D'Arcy",
        "icon": "/games/523_120.jpg",
        "info1": "Nam",
        "info2": "Pháp sư",
        "info3": "Mana",
        "info4": "Học Viện Carano",
        "info5": "2019",
        "info6": "6",
        "__typename": "Hero"
    },
    {
        "id": 25,
        "name": "Dextra",
        "icon": "/games/534_120.jpg",
        "info1": "Nữ",
        "info2": "Đấu sĩ, Đỡ đòn",
        "info3": "Máu",
        "info4": "Tân Liên Hiệp",
        "info5": "2020",
        "info6": "5",
        "__typename": "Hero"
    },
    {
        "id": 26,
        "name": "Điêu Thuyền",
        "icon": "/games/152_120.jpg",
        "info1": "Nữ",
        "info2": "Pháp sư",
        "info3": "Mana",
        "info4": "Vương Quốc Rồng",
        "info5": "2016",
        "info6": "13",
        "__typename": "Hero"
    },
    {
        "id": 27,
        "name": "Dirak",
        "icon": "/games/530_120.jpg",
        "info1": "Nam",
        "info2": "Pháp sư",
        "info3": "Mana",
        "info4": "Học Viện Carano",
        "info5": "2019",
        "info6": "6",
        "__typename": "Hero"
    },
    {
        "id": 28,
        "name": "Eland'orr",
        "icon": "/games/199_120.jpg",
        "info1": "Nam",
        "info2": "Xạ thủ",
        "info3": "Mana",
        "info4": "Học Viện Carano",
        "info5": "2019",
        "info6": "7",
        "__typename": "Hero"
    },
    {
        "id": 29,
        "name": "Elsu",
        "icon": "/games/196_120.jpg",
        "info1": "Nam",
        "info2": "Xạ thủ",
        "info3": "Mana",
        "info4": "Tân Liên Hiệp",
        "info5": "2018",
        "info6": "9",
        "__typename": "Hero"
    },
    {
        "id": 30,
        "name": "Enzo",
        "icon": "/games/195_120.jpg",
        "info1": "Nam",
        "info2": "Sát thủ",
        "info3": "Mana",
        "info4": "Tháp Quang Minh",
        "info5": "2019",
        "info6": "8",
        "__typename": "Hero"
    },
    {
        "id": 31,
        "name": "Errol",
        "icon": "/games/522_120.jpg",
        "info1": "Nam",
        "info2": "Đấu sĩ",
        "info3": "Không",
        "info4": "Norman",
        "info5": "2019",
        "info6": "7",
        "__typename": "Hero"
    },
    {
        "id": 32,
        "name": "Fennik",
        "icon": "/games/173_120.jpg",
        "info1": "Không xác định",
        "info2": "Xạ thủ",
        "info3": "Mana",
        "info4": "Rừng Nguyên Sinh",
        "info5": "2016",
        "info6": "9",
        "__typename": "Hero"
    },
    {
        "id": 33,
        "name": "Florentino",
        "icon": "/games/521_120.jpg",
        "info1": "Nam",
        "info2": "Đấu sĩ",
        "info3": "Không",
        "info4": "Norman",
        "info5": "2019",
        "info6": "10",
        "__typename": "Hero"
    },
    {
        "id": 34,
        "name": "Gildur",
        "icon": "/games/108_120.jpg",
        "info1": "Nam",
        "info2": "Đỡ đòn, Trợ thủ",
        "info3": "Mana",
        "info4": "Norman",
        "info5": "2016",
        "info6": "8",
        "__typename": "Hero"
    },
    {
        "id": 35,
        "name": "Grakk",
        "icon": "/games/175_120.jpg",
        "info1": "Nam",
        "info2": "Đỡ đòn, Trợ thủ",
        "info3": "Mana",
        "info4": "Chưa rõ",
        "info5": "2016",
        "info6": "10",
        "__typename": "Hero"
    },
    {
        "id": 36,
        "name": "Hayate",
        "icon": "/games/132_120.jpg",
        "info1": "Nam",
        "info2": "Xạ thủ",
        "info3": "Nội năng",
        "info4": "Vực Hỗn Mang",
        "info5": "2019",
        "info6": "12",
        "__typename": "Hero"
    },
    {
        "id": 37,
        "name": "Helen",
        "icon": "/games/184_120.jpg",
        "info1": "Nữ",
        "info2": "Trợ thủ",
        "info3": "Mana",
        "info4": "Rừng Nguyên Sinh",
        "info5": "2022",
        "info6": "4",
        "__typename": "Hero"
    },
    {
        "id": 38,
        "name": "Iggy",
        "icon": "/games/538_120.jpg",
        "info1": "Nam",
        "info2": "Pháp sư",
        "info3": "Không",
        "info4": "Tân Liên Hiệp",
        "info5": "2021",
        "info6": "4",
        "__typename": "Hero"
    },
    {
        "id": 39,
        "name": "Ignis",
        "icon": "/games/124_120.jpg",
        "info1": "Nam",
        "info2": "Pháp sư",
        "info3": "Mana",
        "info4": "Vương Quốc Okka",
        "info5": "2017",
        "info6": "6",
        "__typename": "Hero"
    },
    {
        "id": 40,
        "name": "Ilumia",
        "icon": "/games/136_120.jpg",
        "info1": "Nữ",
        "info2": "Pháp sư",
        "info3": "Mana",
        "info4": "Tháp Quang Minh",
        "info5": "2017",
        "info6": "10",
        "__typename": "Hero"
    },
    {
        "id": 41,
        "name": "Ishar",
        "icon": "/games/526_120.jpg",
        "info1": "Nữ",
        "info2": "Pháp sư, Trợ thủ",
        "info3": "Mana",
        "info4": "Học Viện Carano",
        "info5": "2019",
        "info6": "8",
        "__typename": "Hero"
    },
    {
        "id": 42,
        "name": "Jinna",
        "icon": "/games/115_120.jpg",
        "info1": "Nam",
        "info2": "Pháp sư",
        "info3": "Mana",
        "info4": "Tháp Quang Minh",
        "info5": "2017",
        "info6": "4",
        "__typename": "Hero"
    },
    {
        "id": 43,
        "name": "Joker",
        "icon": "/games/174_120.jpg",
        "info1": "Nam",
        "info2": "Xạ thủ",
        "info3": "Mana",
        "info4": "Chưa rõ",
        "info5": "2017",
        "info6": "3",
        "__typename": "Hero"
    },
    {
        "id": 44,
        "name": "Kahlii",
        "icon": "/games/110_120.jpg",
        "info1": "Nữ",
        "info2": "Pháp sư",
        "info3": "Mana",
        "info4": "Vực Hỗn Mang",
        "info5": "2016",
        "info6": "7",
        "__typename": "Hero"
    },
    {
        "id": 45,
        "name": "Kaine",
        "icon": "https://lienquan.garena.vn/files/upload/images/Banpick/banlist/Kaine.jpg",
        "info1": "Nam",
        "info2": "Sát thủ",
        "info3": "Mana",
        "info4": "Tân Liên Hiệp",
        "info5": "2023",
        "info6": "6",
        "__typename": "Hero"
    },
    {
        "id": 46,
        "name": "Keera",
        "icon": "/games/531_120.jpg",
        "info1": "Nữ",
        "info2": "Sát thủ",
        "info3": "Mana",
        "info4": "Học Viện Carano",
        "info5": "2020",
        "info6": "8",
        "__typename": "Hero"
    },
    {
        "id": 47,
        "name": "Kil'Groth",
        "icon": "/games/139_120.jpg",
        "info1": "Không xác định",
        "info2": "Đấu sĩ",
        "info3": "Mana",
        "info4": "Rừng Nguyên Sinh",
        "info5": "2017",
        "info6": "4",
        "__typename": "Hero"
    },
    {
        "id": 48,
        "name": "Kriknak",
        "icon": "/games/162_120.jpg",
        "info1": "Không xác định",
        "info2": "Sát thủ",
        "info3": "Mana",
        "info4": "Vực Hỗn Mang",
        "info5": "2017",
        "info6": "6",
        "__typename": "Hero"
    },
    {
        "id": 49,
        "name": "Krixi",
        "icon": "/games/106_120.jpg",
        "info1": "Nữ",
        "info2": "Pháp sư",
        "info3": "Mana",
        "info4": "Rừng Nguyên Sinh",
        "info5": "2016",
        "info6": "13",
        "__typename": "Hero"
    },
    {
        "id": 50,
        "name": "Krizzix",
        "icon": "/games/189_120.jpg",
        "info1": "Không xác định",
        "info2": "Trợ thủ",
        "info3": "Mana",
        "info4": "Rừng Nguyên Sinh",
        "info5": "2019",
        "info6": "4",
        "__typename": "Hero"
    },
    {
        "id": 51,
        "name": "Lauriel",
        "icon": "/games/141_120.jpg",
        "info1": "Nữ",
        "info2": "Pháp sư",
        "info3": "Mana",
        "info4": "Tháp Quang Minh",
        "info5": "2017",
        "info6": "14",
        "__typename": "Hero"
    },
    {
        "id": 52,
        "name": "Laville",
        "icon": "/games/533_120.jpg",
        "info1": "Nam",
        "info2": "Xạ thủ",
        "info3": "Mana",
        "info4": "Tháp Quang Minh",
        "info5": "2020",
        "info6": "9",
        "__typename": "Hero"
    },
    {
        "id": 53,
        "name": "Liliana",
        "icon": "/games/510_120.jpg",
        "info1": "Nữ",
        "info2": "Pháp sư",
        "info3": "Mana",
        "info4": "Học Viện Carano",
        "info5": "2018",
        "info6": "10",
        "__typename": "Hero"
    },
    {
        "id": 54,
        "name": "Lindis",
        "icon": "/games/177_120.jpg",
        "info1": "Nữ",
        "info2": "Xạ thủ",
        "info3": "Mana",
        "info4": "Rừng Nguyên Sinh",
        "info5": "2017",
        "info6": "8",
        "__typename": "Hero"
    },
    {
        "id": 55,
        "name": "Lorion",
        "icon": "/games/539_120.jpg",
        "info1": "Nam",
        "info2": "Pháp sư",
        "info3": "Mana",
        "info4": "Tân Liên Hiệp",
        "info5": "2020",
        "info6": "5",
        "__typename": "Hero"
    },
    {
        "id": 56,
        "name": "Lữ Bố",
        "icon": "/games/128_120.jpg",
        "info1": "Nam",
        "info2": "Đấu sĩ",
        "info3": "Không",
        "info4": "Vương Quốc Rồng",
        "info5": "2016",
        "info6": "11",
        "__typename": "Hero"
    },
    {
        "id": 57,
        "name": "Lumburr",
        "icon": "/games/168_120.jpg",
        "info1": "Không xác định",
        "info2": "Đỡ đòn, Trợ thủ",
        "info3": "Mana",
        "info4": "Rừng Nguyên Sinh",
        "info5": "2016",
        "info6": "4",
        "__typename": "Hero"
    },
    {
        "id": 58,
        "name": "Maloch",
        "icon": "/games/123_120.jpg",
        "info1": "Nam",
        "info2": "Đấu sĩ, Đỡ đòn",
        "info3": "Không",
        "info4": "Vực Hỗn Mang",
        "info5": "2017",
        "info6": "9",
        "__typename": "Hero"
    },
    {
        "id": 59,
        "name": "Marja",
        "icon": "/games/121_120.jpg",
        "info1": "Nữ",
        "info2": "Pháp sư",
        "info3": "Không",
        "info4": "Vực Hỗn Mang",
        "info5": "2018",
        "info6": "5",
        "__typename": "Hero"
    },
    {
        "id": 60,
        "name": "Max",
        "icon": "/games/180_120.jpg",
        "info1": "Nam",
        "info2": "Đỡ đòn",
        "info3": "Mana",
        "info4": "Tân Liên Hiệp",
        "info5": "2018",
        "info6": "8",
        "__typename": "Hero"
    },
    {
        "id": 61,
        "name": "Mganga",
        "icon": "/games/119_120.jpg",
        "info1": "Nam",
        "info2": "Pháp sư",
        "info3": "Mana",
        "info4": "Vực Hỗn Mang",
        "info5": "2016",
        "info6": "6",
        "__typename": "Hero"
    },
    {
        "id": 62,
        "name": "Mina",
        "icon": "/games/120_120.jpg",
        "info1": "Nữ",
        "info2": "Đỡ đòn, Trợ thủ",
        "info3": "Mana",
        "info4": "Vực Hỗn Mang",
        "info5": "2016",
        "info6": "9",
        "__typename": "Hero"
    },
    {
        "id": 63,
        "name": "Moren",
        "icon": "/games/170_120.jpg",
        "info1": "Nam",
        "info2": "Xạ thủ",
        "info3": "Mana",
        "info4": "Tân Liên Hiệp",
        "info5": "2017",
        "info6": "4",
        "__typename": "Hero"
    },
    {
        "id": 64,
        "name": "Murad",
        "icon": "/games/131_120.jpg",
        "info1": "Nam",
        "info2": "Sát thủ",
        "info3": "Mana",
        "info4": "Helios",
        "info5": "2017",
        "info6": "17",
        "__typename": "Hero"
    },
    {
        "id": 65,
        "name": "Nakroth",
        "icon": "/games/150_120.jpg",
        "info1": "Nam",
        "info2": "Sát thủ",
        "info3": "Mana",
        "info4": "Vực Hỗn Mang",
        "info5": "2016",
        "info6": "11",
        "__typename": "Hero"
    },
    {
        "id": 66,
        "name": "Natalya",
        "icon": "/games/142_120.jpg",
        "info1": "Nữ",
        "info2": "Pháp sư",
        "info3": "Mana",
        "info4": "Vực Hỗn Mang",
        "info5": "2016",
        "info6": "11",
        "__typename": "Hero"
    },
    {
        "id": 67,
        "name": "Ngộ Không",
        "icon": "/games/167_120.jpg",
        "info1": "Nam",
        "info2": "Sát thủ",
        "info3": "Mana",
        "info4": "Chưa rõ",
        "info5": "2017",
        "info6": "12",
        "__typename": "Hero"
    },
    {
        "id": 68,
        "name": "Ormarr",
        "icon": "/games/117_120.jpg",
        "info1": "Nam",
        "info2": "Đỡ đòn",
        "info3": "Mana",
        "info4": "Chưa rõ",
        "info5": "2016",
        "info6": "4",
        "__typename": "Hero"
    },
    {
        "id": 69,
        "name": "Omega",
        "icon": "/games/114_120.jpg",
        "info1": "Không xác định",
        "info2": "Đỡ đòn, Trợ thủ",
        "info3": "Mana",
        "info4": "Tháp Quang Minh",
        "info5": "2016",
        "info6": "4",
        "__typename": "Hero"
    },
    {
        "id": 70,
        "name": "Omen",
        "icon": "/games/506_120.jpg",
        "info1": "Nam",
        "info2": "Đấu sĩ",
        "info3": "Không",
        "info4": "Vực Hỗn Mang",
        "info5": "2018",
        "info6": "9",
        "__typename": "Hero"
    },
    {
        "id": 71,
        "name": "Paine",
        "icon": "/games/137_120.jpg",
        "info1": "Nam",
        "info2": "Sát thủ",
        "info3": "Nội năng",
        "info4": "Học Viện Carano",
        "info5": "2020",
        "info6": "5",
        "__typename": "Hero"
    },
    {
        "id": 72,
        "name": "Preyta",
        "icon": "/games/148_120.jpg",
        "info1": "Nam",
        "info2": "Pháp sư",
        "info3": "Mana",
        "info4": "Vực Hỗn Mang",
        "info5": "2017",
        "info6": "5",
        "__typename": "Hero"
    },
    {
        "id": 73,
        "name": "Qi",
        "icon": "/games/528_120.jpg",
        "info1": "Nữ",
        "info2": "Đấu sĩ, Sát thủ",
        "info3": "Mana",
        "info4": "Vương Quốc Rồng",
        "info5": "2019",
        "info6": "7",
        "__typename": "Hero"
    },
    {
        "id": 74,
        "name": "Quillen",
        "icon": "/games/518_120.jpg",
        "info1": "Nam",
        "info2": "Sát thủ",
        "info3": "Không",
        "info4": "Tân Liên Hiệp",
        "info5": "2018",
        "info6": "11",
        "__typename": "Hero"
    },
    {
        "id": 75,
        "name": "Raz",
        "icon": "/games/157_120.jpg",
        "info1": "Nam",
        "info2": "Sát thủ, Pháp sư",
        "info3": "Nội năng",
        "info4": "Norman",
        "info5": "2017",
        "info6": "11",
        "__typename": "Hero"
    },
    {
        "id": 76,
        "name": "Richter",
        "icon": "/games/515_120.jpg",
        "info1": "Nam",
        "info2": "Đấu sĩ",
        "info3": "Không",
        "info4": "Norman",
        "info5": "2018",
        "info6": "6",
        "__typename": "Hero"
    },
    {
        "id": 77,
        "name": "Rouie",
        "icon": "/games/191_120.jpg",
        "info1": "Nữ",
        "info2": "Trợ thủ",
        "info3": "Mana",
        "info4": "Tháp Quang Minh",
        "info5": "2020",
        "info6": "6",
        "__typename": "Hero"
    },
    {
        "id": 78,
        "name": "Rourke",
        "icon": "/games/512_120.jpg",
        "info1": "Nam",
        "info2": "Đấu sĩ",
        "info3": "Mana",
        "info4": "Tân Liên Hiệp",
        "info5": "2018",
        "info6": "5",
        "__typename": "Hero"
    },
    {
        "id": 79,
        "name": "Roxie",
        "icon": "/games/514_120.jpg",
        "info1": "Nữ",
        "info2": "Đấu sĩ, Đỡ đòn",
        "info3": "Mana",
        "info4": "Tân Liên Hiệp",
        "info5": "2018",
        "info6": "6",
        "__typename": "Hero"
    },
    {
        "id": 80,
        "name": "Ryoma",
        "icon": "/games/163_120.jpg",
        "info1": "Nam",
        "info2": "Đấu sĩ, Sát thủ",
        "info3": "Không",
        "info4": "Chưa rõ",
        "info5": "2017",
        "info6": "10",
        "__typename": "Hero"
    },
    {
        "id": 81,
        "name": "Sephera",
        "icon": "/games/527_120.jpg",
        "info1": "Nữ",
        "info2": "Pháp sư, Trợ thủ",
        "info3": "Mana",
        "info4": "Học Viện Carano",
        "info5": "2018",
        "info6": "9",
        "__typename": "Hero"
    },
    {
        "id": 82,
        "name": "Sinestrea",
        "icon": "/games/535_120.jpg",
        "info1": "Nữ",
        "info2": "Sát thủ",
        "info3": "Máu",
        "info4": "Tân Liên Hiệp",
        "info5": "2020",
        "info6": "6",
        "__typename": "Hero"
    },
    {
        "id": 83,
        "name": "Skud",
        "icon": "/games/134_120.jpg",
        "info1": "Nam",
        "info2": "Đấu sĩ, Đỡ đòn",
        "info3": "Mana",
        "info4": "Vực Hỗn Mang",
        "info5": "2017",
        "info6": "6",
        "__typename": "Hero"
    },
    {
        "id": 84,
        "name": "Slimz",
        "icon": "/games/169_120.jpg",
        "info1": "Không xác định",
        "info2": "Xạ thủ",
        "info3": "Mana",
        "info4": "Rừng Nguyên Sinh",
        "info5": "2017",
        "info6": "6",
        "__typename": "Hero"
    },
    {
        "id": 85,
        "name": "Superman",
        "icon": "/games/140_120.jpg",
        "info1": "Nam",
        "info2": "Đấu sĩ",
        "info3": "Không",
        "info4": "Chưa rõ",
        "info5": "2017",
        "info6": "3",
        "__typename": "Hero"
    },
    {
        "id": 86,
        "name": "Taara",
        "icon": "/games/144_120.jpg",
        "info1": "Nữ",
        "info2": "Đấu sĩ, Đỡ đòn",
        "info3": "Máu",
        "info4": "Vực Hỗn Mang",
        "info5": "2016",
        "info6": "7",
        "__typename": "Hero"
    },
    {
        "id": 87,
        "name": "Tachi",
        "icon": "/games/542_120.jpg",
        "info1": "Nam",
        "info2": "Đấu sĩ",
        "info3": "Không",
        "info4": "Đảo Sương Mù",
        "info5": "2021",
        "info6": "3",
        "__typename": "Hero"
    },
    {
        "id": 88,
        "name": "TeeMee",
        "icon": "/games/186_120.jpg",
        "info1": "Không xác định",
        "info2": "Đỡ đòn, Trợ thủ",
        "info3": "Mana",
        "info4": "Rừng Nguyên Sinh",
        "info5": "2018",
        "info6": "6",
        "__typename": "Hero"
    },
    {
        "id": 89,
        "name": "Teeri",
        "icon": "/games/546_120.jpg",
        "info1": "Nữ",
        "info2": "Xạ thủ",
        "info3": "Mana",
        "info4": "Tháp Quang Minh",
        "info5": "2022",
        "info6": "3",
        "__typename": "Hero"
    },
    {
        "id": 90,
        "name": "Tel'Annas",
        "icon": "/games/501_120.jpg",
        "info1": "Nữ",
        "info2": "Xạ thủ",
        "info3": "Mana",
        "info4": "Rừng Nguyên Sinh",
        "info5": "2017",
        "info6": "15",
        "__typename": "Hero"
    },
    {
        "id": 91,
        "name": "Thane",
        "icon": "/games/135_120.jpg",
        "info1": "Nam",
        "info2": "Đỡ đòn",
        "info3": "Mana",
        "info4": "Norman",
        "info5": "2016",
        "info6": "5",
        "__typename": "Hero"
    },
    {
        "id": 92,
        "name": "The Flash",
        "icon": "/games/507_120.jpg",
        "info1": "Nam",
        "info2": "Sát thủ",
        "info3": "Mana",
        "info4": "Chưa rõ",
        "info5": "2018",
        "info6": "2",
        "__typename": "Hero"
    },
    {
        "id": 93,
        "name": "Thorne",
        "icon": "/games/532_120.jpg",
        "info1": "Nam",
        "info2": "Xạ thủ",
        "info3": "Không",
        "info4": "Tân Liên Hiệp",
        "info5": "2020",
        "info6": "5",
        "__typename": "Hero"
    },
    {
        "id": 94,
        "name": "Toro",
        "icon": "/games/105_120.jpg",
        "info1": "Không xác định",
        "info2": "Đỡ đòn, Trợ thủ",
        "info3": "Mana",
        "info4": "Chưa rõ",
        "info5": "2016",
        "info6": "5",
        "__typename": "Hero"
    },
    {
        "id": 95,
        "name": "Triệu Vân",
        "icon": "/games/129_120.jpg",
        "info1": "Nam",
        "info2": "Đấu sĩ",
        "info3": "Mana",
        "info4": "Vương Quốc Rồng",
        "info5": "2016",
        "info6": "10",
        "__typename": "Hero"
    },
    {
        "id": 96,
        "name": "Tulen",
        "icon": "/games/190_120.jpg",
        "info1": "Nam",
        "info2": "Pháp sư",
        "info3": "Mana",
        "info4": "Tháp Quang Minh",
        "info5": "2017",
        "info6": "15",
        "__typename": "Hero"
    },
    {
        "id": 97,
        "name": "Valhein",
        "icon": "/games/133_120.jpg",
        "info1": "Nam",
        "info2": "Xạ thủ",
        "info3": "Mana",
        "info4": "Tân Liên Hiệp",
        "info5": "2016",
        "info6": "13",
        "__typename": "Hero"
    },
    {
        "id": 98,
        "name": "Veera",
        "icon": "/games/109_120.jpg",
        "info1": "Nữ",
        "info2": "Pháp sư",
        "info3": "Mana",
        "info4": "Vực Hỗn Mang",
        "info5": "2016",
        "info6": "9",
        "__typename": "Hero"
    },
    {
        "id": 99,
        "name": "Veres",
        "icon": "/games/520_120.jpg",
        "info1": "Nữ",
        "info2": "Đấu sĩ",
        "info3": "Không",
        "info4": "Tân Liên Hiệp",
        "info5": "2019",
        "info6": "10",
        "__typename": "Hero"
    },
    {
        "id": 100,
        "name": "Violet",
        "icon": "/games/111_120.jpg",
        "info1": "Nữ",
        "info2": "Xạ thủ",
        "info3": "Mana",
        "info4": "Norman",
        "info5": "2016",
        "info6": "17",
        "__typename": "Hero"
    },
    {
        "id": 101,
        "name": "Vol'kath",
        "icon": "/games/529_120.jpg",
        "info1": "Nam",
        "info2": "Đấu sĩ, Sát thủ",
        "info3": "Mana",
        "info4": "Vực Hỗn Mang",
        "info5": "2019",
        "info6": "6",
        "__typename": "Hero"
    },
    {
        "id": 102,
        "name": "Wiro",
        "icon": "/games/194_120.jpg",
        "info1": "Nam",
        "info2": "Đấu sĩ, Đỡ đòn",
        "info3": "Mana",
        "info4": "Chưa rõ",
        "info5": "2018",
        "info6": "1",
        "__typename": "Hero"
    },
    {
        "id": 103,
        "name": "Wisp",
        "icon": "/games/508_120.jpg",
        "info1": "Nữ",
        "info2": "Xạ thủ",
        "info3": "Mana",
        "info4": "Tân Liên Hiệp",
        "info5": "2018",
        "info6": "7",
        "__typename": "Hero"
    },
    {
        "id": 104,
        "name": "Wonder Woman",
        "icon": "/games/504_120.jpg",
        "info1": "Nữ",
        "info2": "Đấu sĩ",
        "info3": "Không",
        "info4": "Chưa rõ",
        "info5": "2017",
        "info6": "2",
        "__typename": "Hero"
    },
    {
        "id": 105,
        "name": "Xeniel",
        "icon": "/games/149_120.jpg",
        "info1": "Nam",
        "info2": "Đỡ đòn, Trợ thủ",
        "info3": "Mana",
        "info4": "Tháp Quang Minh",
        "info5": "2017",
        "info6": "8",
        "__typename": "Hero"
    },
    {
        "id": 106,
        "name": "Y'bneth",
        "icon": "/games/509_120.jpg",
        "info1": "Không xác định",
        "info2": "Đỡ đòn",
        "info3": "Mana",
        "info4": "Rừng Nguyên Sinh",
        "info5": "2018",
        "info6": "4",
        "__typename": "Hero"
    },
    {
        "id": 107,
        "name": "Yan",
        "icon": "/games/544_120.jpg",
        "info1": "Nam",
        "info2": "Đấu sĩ, Sát thủ",
        "info3": "Mana",
        "info4": "Vương Quốc Rồng",
        "info5": "2022",
        "info6": "4",
        "__typename": "Hero"
    },
    {
        "id": 108,
        "name": "Yena",
        "icon": "/games/154_120.jpg",
        "info1": "Nữ",
        "info2": "Đấu sĩ",
        "info3": "Không",
        "info4": "Helios",
        "info5": "2019",
        "info6": "11",
        "__typename": "Hero"
    },
    {
        "id": 109,
        "name": "Yorn",
        "icon": "/games/112_120.jpg",
        "info1": "Nam",
        "info2": "Xạ thủ",
        "info3": "Mana",
        "info4": "Tháp Quang Minh",
        "info5": "2016",
        "info6": "12",
        "__typename": "Hero"
    },
    {
        "id": 110,
        "name": "Yue",
        "icon": "/games/545_120.jpg",
        "info1": "Nữ",
        "info2": "Pháp sư",
        "info3": "Mana",
        "info4": "Vương Quốc Rồng",
        "info5": "2022",
        "info6": "3",
        "__typename": "Hero"
    },
    {
        "id": 111,
        "name": "Zata",
        "icon": "/games/513_120.jpg",
        "info1": "Nam",
        "info2": "Sát thủ, Pháp sư",
        "info3": "Mana",
        "info4": "Tháp Quang Minh",
        "info5": "2020",
        "info6": "7",
        "__typename": "Hero"
    },
    {
        "id": 112,
        "name": "Zephys",
        "icon": "/games/107_120.jpg",
        "info1": "Nam",
        "info2": "Đấu sĩ, Sát thủ",
        "info3": "Mana",
        "info4": "Vực Hỗn Mang",
        "info5": "2016",
        "info6": "9",
        "__typename": "Hero"
    },
    {
        "id": 113,
        "name": "Zill",
        "icon": "/games/146_120.jpg",
        "info1": "Nam",
        "info2": "Sát thủ",
        "info3": "Mana",
        "info4": "Rừng Nguyên Sinh",
        "info5": "2017",
        "info6": "7",
        "__typename": "Hero"
    },
    {
        "id": 114,
        "name": "Zip",
        "icon": "/games/525_120.jpg",
        "info1": "Không xác định",
        "info2": "Trợ thủ",
        "info3": "Mana",
        "info4": "Vực Hỗn Mang",
        "info5": "2019",
        "info6": "5",
        "__typename": "Hero"
    },
    {
        "id": 115,
        "name": "Zuka",
        "icon": "/games/503_120.jpg",
        "info1": "Nam",
        "info2": "Đấu sĩ, Sát thủ",
        "info3": "Không",
        "info4": "Rừng Nguyên Sinh",
        "info5": "2017",
        "info6": "9",
        "__typename": "Hero"
    }
]

const genders = [
    { label: 'Nữ', value: 'Nữ' },
    { label: 'Nam', value: 'Nam' },
    { label: 'Không xác định', value: 'Không xác định' },
]

const positions = [
    {
        "label": "Đấu sĩ, Sát thủ",
        "value": "Đấu sĩ, Sát thủ"
    },
    {
        "label": "Pháp sư",
        "value": "Pháp sư"
    },
    {
        "label": "Trợ thủ",
        "value": "Trợ thủ"
    },
    {
        "label": "Đấu sĩ",
        "value": "Đấu sĩ"
    },
    {
        "label": "Pháp sư, Trợ thủ",
        "value": "Pháp sư, Trợ thủ"
    },
    {
        "label": "Sát thủ",
        "value": "Sát thủ"
    },
    {
        "label": "Đấu sĩ, Đỡ đòn",
        "value": "Đấu sĩ, Đỡ đòn"
    },
    {
        "label": "Đỡ đòn, Trợ thủ",
        "value": "Đỡ đòn, Trợ thủ"
    },
    {
        "label": "Đỡ đòn",
        "value": "Đỡ đòn"
    },
    {
        "label": "Xạ thủ",
        "value": "Xạ thủ"
    },
    {
        "label": "Sát thủ, Pháp sư",
        "value": "Sát thủ, Pháp sư"
    }
]

const skillUses = [
    {
        "label": "Không",
        "value": "Không"
    },
    {
        "label": "Mana",
        "value": "Mana"
    },
    {
        "label": "Nội năng",
        "value": "Nội năng"
    },
    {
        "label": "Máu",
        "value": "Máu"
    }
]

const areas = [
    {
        "label": "Đảo Sương Mù",
        "value": "Đảo Sương Mù"
    },
    {
        "label": "Vực Hỗn Mang",
        "value": "Vực Hỗn Mang"
    },
    {
        "label": "Norman",
        "value": "Norman"
    },
    {
        "label": "Tân Liên Hiệp",
        "value": "Tân Liên Hiệp"
    },
    {
        "label": "Học Viện Carano",
        "value": "Học Viện Carano"
    },
    {
        "label": "Vương Quốc Okka",
        "value": "Vương Quốc Okka"
    },
    {
        "label": "Rừng Nguyên Sinh",
        "value": "Rừng Nguyên Sinh"
    },
    {
        "label": "Helios",
        "value": "Helios"
    },
    {
        "label": "Tháp Quang Minh",
        "value": "Tháp Quang Minh"
    },
    {
        "label": "Chưa rõ",
        "value": "Chưa rõ"
    },
    {
        "label": "Vương Quốc Rồng",
        "value": "Vương Quốc Rồng"
    }
]

const years = [
    {
        "label": "2016",
        "value": "2016"
    },
    {
        "label": "2017",
        "value": "2017"
    },
    {
        "label": "2018",
        "value": "2018"
    },
    {
        "label": "2019",
        "value": "2019"
    },
    {
        "label": "2020",
        "value": "2020"
    },
    {
        "label": "2021",
        "value": "2021"
    },
    {
        "label": "2022",
        "value": "2022"
    },
    {
        "label": "2023",
        "value": "2023"
    },
]

const skinCounts = [
    {
        "label": "1",
        "value": "1"
    },
    {
        "label": "2",
        "value": "2"
    },
    {
        "label": "3",
        "value": "3"
    },
    {
        "label": "4",
        "value": "4"
    },
    {
        "label": "5",
        "value": "5"
    },
    {
        "label": "6",
        "value": "6"
    },
    {
        "label": "7",
        "value": "7"
    },
    {
        "label": "8",
        "value": "8"
    },
    {
        "label": "9",
        "value": "9"
    },
    {
        "label": "10",
        "value": "10"
    },
    {
        "label": "11",
        "value": "11"
    },
    {
        "label": "12",
        "value": "12"
    },
    {
        "label": "13",
        "value": "13"
    },
    {
        "label": "14",
        "value": "14"
    },
    {
        "label": "15",
        "value": "15"
    },
    {
        "label": "17",
        "value": "17"
    },
]

export default datas;
export { genders, positions, skillUses, areas, years, skinCounts };