
module.exports = {
  // getList returns the list of currencies, indexed by Alpha3 code
  list: function() {
    return isoCurrencies
  },
  // information returns information about said currency from
  //  an iso 4217 currency code
  information: function(alpha) {
    return isoCurrencies[alpha.toUpperCase()]
  },
  // isValid returns true if the currency alpha is a valid currency alpha
  isValid: function(alpha) {
    var cur = isoCurrencies[alpha.toUpperCase()]
    if (cur == undefined) return false
    return true
  }
}

// isoCurrencies according to the iso 4217
var isoCurrencies = {
		AED: {
      num: 784,
      places: 2,
      name: "United Arab Emirates dirham",
      symbol: "د.إ",
      countries: ["United Arab Emirates"]
    },
		AFN: {
      num: 971,
      places: 2,
      name: "Afghan afghani",
      symbol: "؋",
      countries: ["Afghanistan"]
    },
		ALL: {
      num: 8,
      places: 2,
      name: "Albanian lek",
      symbol: "L",
      countries: ["Albania"]
    },
		AMD: {
      num: 51,
      places: 2,
      name: "Armenian dram",
      symbol: "֏",
      countries: ["Armenia"]
    },
		ANG: {
      num: 532,
      places: 2,
      name: "Netherlands Antillean guilder",
      symbol: "NAƒ",
      countries: ["Curaçao (CW)", "Sint Maarten (SX)"]
    },
		AOA: {
      num: 973,
      places: 2,
      name: "Angolan kwanza",
      symbol: "Kz",
      countries: ["Angola"]
    },
		ARS: {
      num: 32,
      places: 2,
      name: "Argentine peso",
      symbol: "$",
      countries: ["Argentina"]
    },
		AUD: {
      num: 36,
      places: 2,
      name: "Australian dollar",
      symbol: "A$",
      countries: ["Australia", "Christmas Island (CX)", "Cocos (Keeling) Islands (CC)", "Heard Island and McDonald Islands (HM)", "Kiribati (KI)", "Nauru (NR)", "Norfolk Island (NF)", "Tuvalu (TV)", "Australian Antarctic Territory"]
    },
		AWG: {
      num: 533,
      places: 2,
      name: "Aruban florin",
      symbol: "Afl",
      countries: ["Aruba"]
    },
		AZN: {
      num: 944,
      places: 2,
      name: "Azerbaijani manat",
      symbol: "₼",
      countries: ["Azerbaijan"]
    },
		BAM: {
      num: 977,
      places: 2,
      name: "Bosnia and Herzegovina convertible mark",
      symbol: "KM",
      countries: ["Bosnia and Herzegovina"]
    },
		BBD: {
      num: 52,
      places: 2,
      name: "Barbados dollar",
      symbol: "Bds$",
      countries: ["Barbados"]
    },
		BDT: {
      num: 50,
      places: 2,
      name: "Bangladeshi taka",
      symbol: "৳",
      countries: ["Bangladesh"]
    },
		BGN: {
      num: 975,
      places: 2,
      name: "Bulgarian lev",
      symbol: "лв.",
      countries: ["Bulgaria"]
    },
		BHD: {
      num: 48,
      places: 3,
      name: "Bahraini dinar",
      symbol: "BD",
      countries: ["Bahrain"]
    },
		BIF: {
      num: 108,
      places: 0,
      name: "Burundian franc",
      symbol: "FBu",
      countries: ["Burundi"]
    },
		BMD: {
      num: 60,
      places: 2,
      name: "Bermudian dollar",
      symbol: "$",
      countries: ["Bermuda"]
    },
		BND: {
      num: 96,
      places: 2,
      name: "Brunei dollar",
      symbol: "B$",
      countries: ["Brunei", "auxiliary in Singapore (SG)"]
    },
		BOB: {
      num: 68,
      places: 2,
      name: "Boliviano",
      symbol: "Bs",
      countries: ["Bolivia"]
    },
		BOV: {
      num: 984,
      places: 2,
      name: "Bolivian Mvdol (funds code)",
      symbol: "",
      countries: ["Bolivia"]
    },
		BRL: {
      num: 986,
      places: 2,
      name: "Brazilian real",
      symbol: "R$",
      countries: ["Brazil"]
    },
		BSD: {
      num: 44,
      places: 2,
      name: "Bahamian dollar",
      symbol: "B$",
      countries: ["Bahamas"]
    },
		BTN: {
      num: 64,
      places: 2,
      name: "Bhutanese ngultrum",
      symbol: "Nu.",
      countries: ["Bhutan"]
    },
		BWP: {
      num: 72,
      places: 2,
      name: "Botswana pula",
      symbol: "P",
      countries: ["Botswana"]
    },
		BYN: {
      num: 933,
      places: 2,
      name: "Belarusian ruble",
      symbol: "Br",
      countries: ["Belarus"]
    },
		BYR: {
      num: 974,
      places: 0,
      name: "Belarusian ruble",
      symbol: "Br",
      countries: ["Belarus"]
    },
		BZD: {
      num: 84,
      places: 2,
      name: "Belize dollar",
      symbol: "BZ$",
      countries: ["Belize"]
    },
		CAD: {
      num: 124,
      places: 2,
      name: "Canadian dollar",
      symbol: "C$",
      countries: ["Canada"]
    },
		CDF: {
      num: 976,
      places: 2,
      name: "Congolese franc",
      symbol: "FC",
      countries: ["Democratic Republic of the Congo"]
    },
		CHE: {
      num: 947,
      places: 2,
      name: "WIR Euro (complementary currency)",
      symbol: "",
      countries: ["Switzerland"]
    },
		CHF: {
      num: 756,
      places: 2,
      name: "Swiss franc",
      symbol: "Fr.",
      countries: ["Switzerland", "Liechtenstein (LI)"]
    },
		CHW: {
      num: 948,
      places: 2,
      name: "WIR Franc (complementary currency)",
      symbol: "",
      countries: ["Switzerland"]
    },
		CLF: {
      num: 990,
      places: 4,
      name: "Unidad de Fomento (funds code)",
      symbol: "",
      countries: ["Chile"]
    },
		CLP: {
      num: 152,
      places: 0,
      name: "Chilean peso",
      symbol: "$",
      countries: ["Chile"]
    },
		CNY: {
      num: 156,
      places: 2,
      name: "Chinese yuan",
      symbol: "¥",
      countries: ["China"]
    },
		COP: {
      num: 170,
      places: 2,
      name: "Colombian peso",
      symbol: "$",
      countries: ["Colombia"]
    },
		COU: {
      num: 970,
      places: 2,
      name: "Unidad de Valor Real (UVR) (funds code)",
      symbol: "",
      countries: ["Colombia"]
    },
		CRC: {
      num: 188,
      places: 2,
      name: "Costa Rican colon",
      symbol: "₡",
      countries: ["Costa Rica"]
    },
		CUC: {
      num: 931,
      places: 2,
      name: "Cuban convertible peso",
      symbol: "$",
      countries: ["Cuba"]
    },
		CUP: {
      num: 192,
      places: 2,
      name: "Cuban peso",
      symbol: "₱",
      countries: ["Cuba"]
    },
		CVE: {
      num: 132,
      places: 0,
      name: "Cape Verde escudo",
      symbol: "$",
      countries: ["Cape Verde"]
    },
		CZK: {
      num: 203,
      places: 2,
      name: "Czech koruna",
      symbol: "Kč",
      countries: ["Czech Republic"]
    },
		DJF: {
      num: 262,
      places: 0,
      name: "Djiboutian franc",
      symbol: "Fdj",
      countries: ["Djibouti"]
    },
		DKK: {
      num: 208,
      places: 2,
      name: "Danish krone",
      symbol: "kr.",
      countries: ["Denmark", "Faroe Islands (FO)", "Greenland (GL)"]
    },
		DOP: {
      num: 214,
      places: 2,
      name: "Dominican peso",
      symbol: "RD$",
      countries: ["Dominican Republic"]
    },
		DZD: {
      num: 12,
      places: 2,
      name: "Algerian dinar",
      symbol: "DA",
      countries: ["Algeria"]
    },
		EGP: {
      num: 818,
      places: 2,
      name: "Egyptian pound",
      symbol: "E£",
      countries: ["Egypt", "auxiliary in Gaza Strip"]
    },
		ERN: {
      num: 232,
      places: 2,
      name: "Eritrean nakfa",
      symbol: "Nfk",
      countries: ["Eritrea"]
    },
		ETB: {
      num: 230,
      places: 2,
      name: "Ethiopian birr",
      symbol: "Br",
      countries: ["Ethiopia"]
    },
		EUR: {
      num: 978,
      places: 2,
      name: "Euro",
      symbol: "€",
      countries: ["Akrotiri and Dhekelia", "Andorra (AD)", "Austria (AT)", "Belgium (BE)", "Cyprus (CY)", "Estonia (EE)", "Finland (FI)", "France (FR)", "Germany (DE)", "Greece (GR)", "Guadeloupe (GP)", "Ireland (IE)", "Italy (IT)", "Kosovo", "Latvia (LV)", "Lithuania (LT)", "Luxembourg (LU)", "Malta (MT)", "Martinique (MQ)", "Mayotte (YT)", "Monaco (MC)", "Montenegro (ME)", "Netherlands (NL)", "Portugal (PT)", "Réunion (RE)", "Saint Barthélemy (BL)", "Saint Pierre and Miquelon (PM)", "San Marino (SM)", "Slovakia (SK)", "Slovenia (SI)", "Spain (ES)", "Vatican City (VA); see Eurozone"]
    },
		FJD: {
      num: 242,
      places: 2,
      name: "Fiji dollar",
      symbol: "FJ$",
      countries: ["Fiji"]
    },
		FKP: {
      num: 238,
      places: 2,
      name: "Falkland Islands pound",
      symbol: "£",
      countries: ["Falkland Islands (pegged to GBP 1:1)"]
    },
		GBP: {
      num: 826,
      places: 2,
      name: "Pound sterling",
      symbol: "£",
      countries: ["United Kingdom", "the Isle of Man (IM", "see Manx pound)", "Jersey (JE", "see Jersey pound)", "Guernsey (GG", "see Guernsey pound)", "South Georgia and the South Sandwich Islands (GS)", "British Indian Ocean Territory (IO) (also uses USD)", "Tristan da Cunha (SH-TA)", "and British Antarctic Territory"]
    },
		GEL: {
      num: 981,
      places: 2,
      name: "Georgian lari",
      symbol: "₾",
      countries: ["Georgia (except Abkhazia (GE-AB) and South Ossetia)"]
    },
		GHS: {
      num: 936,
      places: 2,
      name: "Ghanaian cedi",
      symbol: "GH₵",
      countries: ["Ghana"]
    },
		GIP: {
      num: 292,
      places: 2,
      name: "Gibraltar pound",
      symbol: "£",
      countries: ["Gibraltar (pegged to GBP 1:1)"]
    },
		GMD: {
      num: 270,
      places: 2,
      name: "Gambian dalasi",
      symbol: "D",
      countries: ["Gambia"]
    },
		GNF: {
      num: 324,
      places: 0,
      name: "Guinean franc",
      symbol: "FG",
      countries: ["Guinea"]
    },
		GTQ: {
      num: 320,
      places: 2,
      name: "Guatemalan quetzal",
      symbol: "Q",
      countries: ["Guatemala"]
    },
		GYD: {
      num: 328,
      places: 2,
      name: "Guyanese dollar",
      symbol: "G$",
      countries: ["Guyana"]
    },
		HKD: {
      num: 344,
      places: 2,
      name: "Hong Kong dollar",
      symbol: "HK$",
      countries: ["Hong Kong", "Macao (MO)"]
    },
		HNL: {
      num: 340,
      places: 2,
      name: "Honduran lempira",
      symbol: "L",
      countries: ["Honduras"]
    },
		HRK: {
      num: 191,
      places: 2,
      name: "Croatian kuna",
      symbol: "kn",
      countries: ["Croatia"]
    },
		HTG: {
      num: 332,
      places: 2,
      name: "Haitian gourde",
      symbol: "G",
      countries: ["Haiti"]
    },
		HUF: {
      num: 348,
      places: 2,
      name: "Hungarian forint",
      symbol: "Ft",
      countries: ["Hungary"]
    },
		IDR: {
      num: 360,
      places: 2,
      name: "Indonesian rupiah",
      symbol: "Rp",
      countries: ["Indonesia"]
    },
		ILS: {
      num: 376,
      places: 2,
      name: "Israeli new shekel",
      symbol: "₪",
      countries: ["Israel", "State of Palestine (PS)"]
    },
		INR: {
      num: 356,
      places: 2,
      name: "Indian rupee",
      symbol: "₹",
      countries: ["India", "Bhutan", "Nepal", "Zimbabwe"]
    },
		IQD: {
      num: 368,
      places: 3,
      name: "Iraqi dinar",
      symbol: "ع.د",
      countries: ["Iraq"]
    },
		IRR: {
      num: 364,
      places: 2,
      name: "Iranian rial",
      symbol: "﷼ ",
      countries: ["Iran"]
    },
		ISK: {
      num: 352,
      places: 0,
      name: "Icelandic króna",
      symbol: "kr",
      countries: ["Iceland"]
    },
		JMD: {
      num: 388,
      places: 2,
      name: "Jamaican dollar",
      symbol: "$",
      countries: ["Jamaica"]
    },
		JOD: {
      num: 400,
      places: 3,
      name: "Jordanian dinar",
      symbol: "",
      countries: ["Jordan", "auxiliary in West Bank"]
    },
		JPY: {
      num: 392,
      places: 0,
      name: "Japanese yen",
      symbol: "¥",
      countries: ["Japan"]
    },
		KES: {
      num: 404,
      places: 2,
      name: "Kenyan shilling",
      symbol: "KSh",
      countries: ["Kenya"]
    },
		KGS: {
      num: 417,
      places: 2,
      name: "Kyrgyzstani som",
      symbol: "som",
      countries: ["Kyrgyzstan"]
    },
		KHR: {
      num: 116,
      places: 2,
      name: "Cambodian riel",
      symbol: "៛",
      countries: ["Cambodia"]
    },
		KMF: {
      num: 174,
      places: 0,
      name: "Comoro franc",
      symbol: "CF",
      countries: ["Comoros"]
    },
		KPW: {
      num: 408,
      places: 2,
      name: "North Korean won",
      symbol: "₩",
      countries: ["North Korea"]
    },
		KRW: {
      num: 410,
      places: 0,
      name: "South Korean won",
      symbol: "₩",
      countries: ["South Korea"]
    },
		KWD: {
      num: 414,
      places: 3,
      name: "Kuwaiti dinar",
      symbol: "د.ك",
      countries: ["Kuwait"]
    },
		KYD: {
      num: 136,
      places: 2,
      name: "Cayman Islands dollar",
      symbol: "$",
      countries: ["Cayman Islands"]
    },
		KZT: {
      num: 398,
      places: 2,
      name: "Kazakhstani tenge",
      symbol: "₸",
      countries: ["Kazakhstan"]
    },
		LAK: {
      num: 418,
      places: 2,
      name: "Lao kip",
      symbol: "₭",
      countries: ["Laos"]
    },
		LBP: {
      num: 422,
      places: 2,
      name: "Lebanese pound",
      symbol: "ل.ل.‎",
      countries: ["Lebanon"]
    },
		LKR: {
      num: 144,
      places: 2,
      name: "Sri Lankan rupee",
      symbol: "රු",
      countries: ["Sri Lanka"]
    },
		LRD: {
      num: 430,
      places: 2,
      name: "Liberian dollar",
      symbol: "L$",
      countries: ["Liberia"]
    },
		LSL: {
      num: 426,
      places: 2,
      name: "Lesotho loti",
      symbol: "M",
      countries: ["Lesotho"]
    },
		LYD: {
      num: 434,
      places: 3,
      name: "Libyan dinar",
      symbol: "LD",
      countries: ["Libya"]
    },
		MAD: {
      num: 504,
      places: 2,
      name: "Moroccan dirham",
      symbol: "MAD",
      countries: ["Morocco"]
    },
		MDL: {
      num: 498,
      places: 2,
      name: "Moldovan leu",
      symbol: "lei",
      countries: ["Moldova (except Transnistria)"]
    },
		MGA: {
      num: 969,
      places: 1,
      name: "Malagasy ariary",
      symbol: "Ar",
      countries: ["Madagascar"]
    },
		MKD: {
      num: 807,
      places: 2,
      name: "Macedonian denar",
      symbol: "ден",
      countries: ["Macedonia"]
    },
		MMK: {
      num: 104,
      places: 2,
      name: "Myanmar kyat",
      symbol: "K",
      countries: ["Myanmar"]
    },
		MNT: {
      num: 496,
      places: 2,
      name: "Mongolian tögrög",
      symbol: "₮",
      countries: ["Mongolia"]
    },
		MOP: {
      num: 446,
      places: 2,
      name: "Macanese pataca",
      symbol: "MOP$",
      countries: ["Macao"]
    },
		MRO: {
      num: 478,
      places: 1,
      name: "Mauritanian ouguiya",
      symbol: "UM",
      countries: ["Mauritania"]
    },
		MUR: {
      num: 480,
      places: 2,
      name: "Mauritian rupee",
      symbol: "₨",
      countries: ["Mauritius"]
    },
		MVR: {
      num: 462,
      places: 2,
      name: "Maldivian rufiyaa",
      symbol: "Rf",
      countries: ["Maldives"]
    },
		MWK: {
      num: 454,
      places: 2,
      name: "Malawian kwacha",
      symbol: "MK",
      countries: ["Malawi"]
    },
		MXN: {
      num: 484,
      places: 2,
      name: "Mexican peso",
      symbol: "Mex$",
      countries: ["Mexico"]
    },
		MXV: {
      num: 979,
      places: 2,
      name: "Mexican Unidad de Inversion (UDI) (funds code)",
      symbol: "",
      countries: ["Mexico"]
    },
		MYR: {
      num: 458,
      places: 2,
      name: "Malaysian ringgit",
      symbol: "RM",
      countries: ["Malaysia"]
    },
		MZN: {
      num: 943,
      places: 2,
      name: "Mozambican metical",
      symbol: "MT",
      countries: ["Mozambique"]
    },
		NAD: {
      num: 516,
      places: 2,
      name: "Namibian dollar",
      symbol: "N$",
      countries: ["Namibia"]
    },
		NGN: {
      num: 566,
      places: 2,
      name: "Nigerian naira",
      symbol: "₦",
      countries: ["Nigeria"]
    },
		NIO: {
      num: 558,
      places: 2,
      name: "Nicaraguan córdoba",
      symbol: "C$",
      countries: ["Nicaragua"]
    },
		NOK: {
      num: 578,
      places: 2,
      name: "Norwegian krone",
      symbol: "kr",
      countries: ["Norway", "Svalbard and Jan Mayen (SJ)", "Bouvet Island (BV)", "Queen Maud Land", "Peter I Island"]
    },
		NPR: {
      num: 524,
      places: 2,
      name: "Nepalese rupee",
      symbol: "रू",
      countries: ["Nepal"]
    },
		NZD: {
      num: 554,
      places: 2,
      name: "New Zealand dollar",
      symbol: "$",
      countries: ["New Zealand", "Cook Islands (CK)", "Niue (NU)", "Pitcairn Islands (PN; see also Pitcairn Islands dollar)", "Tokelau (TK)", "Ross Dependency"]
    },
		OMR: {
      num: 512,
      places: 3,
      name: "Omani rial",
      symbol: "ر.ع.",
      countries: ["Oman"]
    },
		PAB: {
      num: 590,
      places: 2,
      name: "Panamanian balboa",
      symbol: "B/.",
      countries: ["Panama"]
    },
		PEN: {
      num: 604,
      places: 2,
      name: "Peruvian Sol",
      symbol: "S/",
      countries: ["Peru"]
    },
		PGK: {
      num: 598,
      places: 2,
      name: "Papua New Guinean kina",
      symbol: "K",
      countries: ["Papua New Guinea"]
    },
		PHP: {
      num: 608,
      places: 2,
      name: "Philippine peso",
      symbol: "₱",
      countries: ["Philippines"]
    },
		PKR: {
      num: 586,
      places: 2,
      name: "Pakistani rupee",
      symbol: "Rupees",
      countries: ["Pakistan"]
    },
		PLN: {
      num: 985,
      places: 2,
      name: "Polish złoty",
      symbol: "zł",
      countries: ["Poland"]
    },
		PYG: {
      num: 600,
      places: 0,
      name: "Paraguayan guaraní",
      symbol: "₲",
      countries: ["Paraguay"]
    },
		QAR: {
      num: 634,
      places: 2,
      name: "Qatari riyal",
      symbol: "QR",
      countries: ["Qatar"]
    },
		RON: {
      num: 946,
      places: 2,
      name: "Romanian leu",
      symbol: "lei",
      countries: ["Romania"]
    },
		RSD: {
      num: 941,
      places: 2,
      name: "Serbian dinar",
      symbol: "",
      countries: ["Serbia"]
    },
		RUB: {
      num: 643,
      places: 2,
      name: "Russian ruble",
      symbol: "₽",
      countries: ["Russia", "Abkhazia (GE-AB)", "South Ossetia", "Crimea"]
    },
		RWF: {
      num: 646,
      places: 0,
      name: "Rwandan franc",
      symbol: "R₣",
      countries: ["Rwanda"]
    },
		SAR: {
      num: 682,
      places: 2,
      name: "Saudi riyal",
      symbol: "SR",
      countries: ["Saudi Arabia"]
    },
		SBD: {
      num: 90,
      places: 2,
      name: "Solomon Islands dollar",
      symbol: "SI$",
      countries: ["Solomon Islands"]
    },
		SCR: {
      num: 690,
      places: 2,
      name: "Seychelles rupee",
      symbol: "SR",
      countries: ["Seychelles"]
    },
		SDG: {
      num: 938,
      places: 2,
      name: "Sudanese pound",
      symbol: "ج.س.",
      countries: ["Sudan"]
    },
		SEK: {
      num: 752,
      places: 2,
      name: "Swedish krona/kronor",
      symbol: "kr",
      countries: ["Sweden"]
    },
		SGD: {
      num: 702,
      places: 2,
      name: "Singapore dollar",
      symbol: "S$",
      countries: ["Singapore", "auxiliary in Brunei (BN)"]
    },
		SHP: {
      num: 654,
      places: 2,
      name: "Saint Helena pound",
      symbol: "£",
      countries: ["Saint Helena (SH-SH)", "Ascension Island (SH-AC) (pegged to GBP 1:1)"]
    },
		SLL: {
      num: 694,
      places: 2,
      name: "Sierra Leonean leone",
      symbol: "Le",
      countries: ["Sierra Leone"]
    },
		SOS: {
      num: 706,
      places: 2,
      name: "Somali shilling",
      symbol: "Sh.",
      countries: ["Somalia (except Somaliland)"]
    },
		SRD: {
      num: 968,
      places: 2,
      name: "Surinamese dollar",
      symbol: "$",
      countries: ["Suriname"]
    },
		SSP: {
      num: 728,
      places: 2,
      name: "South Sudanese pound",
      symbol: "",
      countries: ["South Sudan"]
    },
		STD: {
      num: 678,
      places: 2,
      name: "São Tomé and Príncipe dobra",
      symbol: "",
      countries: ["São Tomé and Príncipe"]
    },
		SVC: {
      num: 222,
      places: 2,
      name: "Salvadoran colón",
      symbol: "₡",
      countries: ["El Salvador"]
    },
		SYP: {
      num: 760,
      places: 2,
      name: "Syrian pound",
      symbol: "",
      countries: ["Syria"]
    },
		SZL: {
      num: 748,
      places: 2,
      name: "Swazi lilangeni",
      symbol: "L",
      countries: ["Swaziland"]
    },
		THB: {
      num: 764,
      places: 2,
      name: "Thai baht",
      symbol: "฿",
      countries: ["Thailand", "Cambodia", "Myanmar", "Laos"]
    },
		TJS: {
      num: 972,
      places: 2,
      name: "Tajikistani somoni",
      symbol: "",
      countries: ["Tajikistan"]
    },
		TMT: {
      num: 934,
      places: 2,
      name: "Turkmenistani manat",
      symbol: "T",
      countries: ["Turkmenistan"]
    },
		TND: {
      num: 788,
      places: 3,
      name: "Tunisian dinar",
      symbol: "DT",
      countries: ["Tunisia"]
    },
		TOP: {
      num: 776,
      places: 2,
      name: "Tongan paʻanga",
      symbol: "T$",
      countries: ["Tonga"]
    },
		TRY: {
      num: 949,
      places: 2,
      name: "Turkish lira",
      symbol: "₺",
      countries: ["Turkey", "Northern Cyprus"]
    },
		TTD: {
      num: 780,
      places: 2,
      name: "Trinidad and Tobago dollar",
      symbol: "TT$",
      countries: ["Trinidad and Tobago"]
    },
		TWD: {
      num: 901,
      places: 2,
      name: "New Taiwan dollar",
      symbol: "NT$",
      countries: ["Taiwan"]
    },
		TZS: {
      num: 834,
      places: 2,
      name: "Tanzanian shilling",
      symbol: "TSh",
      countries: ["Tanzania"]
    },
		UAH: {
      num: 980,
      places: 2,
      name: "Ukrainian hryvnia",
      symbol: "₴",
      countries: ["Ukraine"]
    },
		UGX: {
      num: 800,
      places: 0,
      name: "Ugandan shilling",
      symbol: "USh",
      countries: ["Uganda"]
    },
		USD: {
      num: 840,
      places: 2,
      name: "United States dollar",
      symbol: "$",
      countries: ["United States", "American Samoa (AS)", "Barbados (BB) (as well as Barbados Dollar)", "Bermuda (BM) (as well as Bermudian Dollar)", "British Indian Ocean Territory (IO) (also uses GBP)", "British Virgin Islands (VG)", "Caribbean Netherlands (BQ - Bonaire", "Sint Eustatius and Saba)", "Ecuador (EC)", "El Salvador (SV)", "Guam (GU)", "Haiti (HT)", "Marshall Islands (MH)", "Federated States of Micronesia (FM)", "Northern Mariana Islands (MP)", "Palau (PW)", "Panama (PA)", "Puerto Rico (PR)", "Timor-Leste (TL)", "Turks and Caicos Islands (TC)", "U.S. Virgin Islands (VI)", "Zimbabwe (ZW)"]
    },
		USN: {
      num: 997,
      places: 2,
      name: "United States dollar (next day) (funds code)",
      symbol: "",
      countries: ["United States"]
    },
		UYI: {
      num: 940,
      places: 0,
      name: "Uruguay Peso en Unidades Indexadas (URUIURUI) (funds code)",
      symbol: "",
      countries: ["Uruguay"]
    },
		UYU: {
      num: 858,
      places: 2,
      name: "Uruguayan peso",
      symbol: "$U",
      countries: ["Uruguay"]
    },
		UZS: {
      num: 860,
      places: 2,
      name: "Uzbekistan som",
      symbol: "som",
      countries: ["Uzbekistan"]
    },
		VEF: {
      num: 937,
      places: 2,
      name: "Venezuelan bolívar",
      symbol: "Bs.F.",
      countries: ["Venezuela"]
    },
		VND: {
      num: 704,
      places: 0,
      name: "Vietnamese dong",
      symbol: "₫",
      countries: ["Vietnam"]
    },
		VUV: {
      num: 548,
      places: 0,
      name: "Vanuatu vatu",
      symbol: "VT",
      countries: ["Vanuatu"]
    },
		WST: {
      num: 882,
      places: 2,
      name: "Samoan tala",
      symbol: "WS$",
      countries: ["Samoa"]
    },
		XAF: {
      num: 950,
      places: 0,
      name: "CFA franc BEAC",
      symbol: "FCFA",
      countries: ["Cameroon (CM)", "Central African Republic (CF)", "Republic of the Congo (CG)", "Chad (TD)", "Equatorial Guinea (GQ)", "Gabon (GA)"]
    },
		XAG: {
      num: 961,
      places: -1,
      name: "Silver (one troy ounce)",
      symbol: "",
      countries: []
    },
		XAU: {
      num: 959,
      places: -1,
      name: "Gold (one troy ounce)",
      symbol: "",
      countries: []
    },
		XBA: {
      num: 955,
      places: -1,
      name: "European Composite Unit (EURCO) (bond market unit)",
      symbol: "",
      countries: []
    },
		XBB: {
      num: 956,
      places: -1,
      name: "European Monetary Unit (E.M.U.-6) (bond market unit)",
      symbol: "",
      countries: []
    },
		XBC: {
      num: 957,
      places: -1,
      name: "European Unit of Account 9 (E.U.A.-9) (bond market unit)",
      symbol: "",
      countries: []
    },
		XBD: {
      num: 958,
      places: -1,
      name: "European Unit of Account 17 (E.U.A.-17) (bond market unit)",
      symbol: "",
      countries: []
    },
		XCD: {
      num: 951,
      places: 2,
      name: "East Caribbean dollar",
      symbol: "$",
      countries: ["Anguilla (AI)", "Antigua and Barbuda (AG)", "Dominica (DM)", "Grenada (GD)", "Montserrat (MS)", "Saint Kitts and Nevis (KN)", "Saint Lucia (LC)", "Saint Vincent and the Grenadines (VC)"]
    },
		XDR: {
      num: 960,
      places: -1,
      name: "Special drawing rights",
      symbol: "SDR",
      countries: ["International Monetary Fund"]
    },
		XOF: {
      num: 952,
      places: 0,
      name: "CFA franc BCEAO",
      symbol: "CFA",
      countries: ["Benin (BJ)", "Burkina Faso (BF)", "Côte d'Ivoire (CI)", "Guinea-Bissau (GW)", "Mali (ML)", "Niger (NE)", "Senegal (SN)", "Togo (TG)"]
    },
		XPD: {
      num: 964,
      places: -1,
      name: "Palladium (one troy ounce)",
      symbol: "",
      countries: []
    },
		XPF: {
      num: 953,
      places: 0,
      name: "CFP franc (franc Pacifique)",
      symbol: "₣",
      countries: ["French territories of the Pacific Ocean: French Polynesia (PF)", "New Caledonia (NC)", "Wallis and Futuna (WF)"]
    },
		XPT: {
      num: 962,
      places: -1,
      name: "Platinum (one troy ounce)",
      symbol: "",
      countries: []
    },
		XSU: {
      num: 994,
      places: -1,
      name: "SUCRE",
      symbol: "Sucre",
      countries: ["Unified System for Regional Compensation (SUCRE)"]
    },
		XTS: {
      num: 963,
      places: -1,
      name: "Code reserved for testing purposes",
      symbol: "TEST",
      countries: []
    },
		XUA: {
      num: 965,
      places: -1,
      name: "ADB Unit of Account",
      symbol: "",
      countries: ["African Development Bank"]
    },
		XXX: {
      num: 999,
      places: -1,
      name: "No currency",
      symbol: "none",
      countries: []
    },
		YER: {
      num: 886,
      places: 2,
      name: "Yemeni rial",
      symbol: "﷼",
      countries: ["Yemen"]
    },
		ZAR: {
      num: 710,
      places: 2,
      name: "South African rand",
      symbol: "R",
      countries: ["South Africa"]
    },
		ZMW: {
      num: 967,
      places: 2,
      name: "Zambian kwacha",
      symbol: "ZK",
      countries: ["Zambia"]
    },
		ZWL: {
      num: 932,
      places: 2,
      name: "Zimbabwean dollar A/10",
      symbol: "Z$",
      countries: ["Zimbabwe"]
    },
	}