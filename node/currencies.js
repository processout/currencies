
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
      symbol: "د.إ",
      num: 784,
      places: 2,
      name: "United Arab Emirates dirham",
      countries: ["United Arab Emirates"]
    },
		AFN: {
      symbol: "	؋",
      num: 971,
      places: 2,
      name: "Afghan afghani",
      countries: ["Afghanistan"]
    },
		ALL: {
      symbol: "Lek",
      num: 8,
      places: 2,
      name: "Albanian lek",
      countries: ["Albania"]
    },
		AMD: {
      symbol: "֏",
      num: 51,
      places: 2,
      name: "Armenian dram",
      countries: ["Armenia"]
    },
		ANG: {
      symbol: "ƒ",
      num: 532,
      places: 2,
      name: "Netherlands Antillean guilder",
      countries: ["Curaçao (CW)", "Sint Maarten (SX)"]
    },
		AOA: {
      symbol: "Kz",
      num: 973,
      places: 2,
      name: "Angolan kwanza",
      countries: ["Angola"]
    },
		ARS: {
      symbol: "$",
      num: 32,
      places: 2,
      name: "Argentine peso",
      countries: ["Argentina"]
    },
		AUD: {
      symbol: "A$",
      num: 36,
      places: 2,
      name: "Australian dollar",
      countries: ["Australia", "Christmas Island (CX)", "Cocos (Keeling) Islands (CC)", "Heard Island and McDonald Islands (HM)", "Kiribati (KI)", "Nauru (NR)", "Norfolk Island (NF)", "Tuvalu (TV)", "Australian Antarctic Territory"]
    },
		AWG: {
      symbol: "Afl.",
      num: 533,
      places: 2,
      name: "Aruban florin",
      countries: ["Aruba"]
    },
		AZN: {
      symbol: "₼",
      num: 944,
      places: 2,
      name: "Azerbaijani manat",
      countries: ["Azerbaijan"]
    },
		BAM: {
      symbol: "KM",
      num: 977,
      places: 2,
      name: "Bosnia and Herzegovina convertible mark",
      countries: ["Bosnia and Herzegovina"]
    },
		BBD: {
      symbol: "Bds$",
      num: 52,
      places: 2,
      name: "Barbados dollar",
      countries: ["Barbados"]
    },
		BDT: {
      symbol: "৳",
      num: 50,
      places: 2,
      name: "Bangladeshi taka",
      countries: ["Bangladesh"]
    },
		BGN: {
      symbol: "лв.",
      num: 975,
      places: 2,
      name: "Bulgarian lev",
      countries: ["Bulgaria"]
    },
		BHD: {
      symbol: "BD",
      num: 48,
      places: 3,
      name: "Bahraini dinar",
      countries: ["Bahrain"]
    },
		BIF: {
      symbol: "FBu",
      num: 108,
      places: 0,
      name: "Burundian franc",
      countries: ["Burundi"]
    },
		BMD: {
      symbol: "$",
      num: 60,
      places: 2,
      name: "Bermudian dollar",
      countries: ["Bermuda"]
    },
		BND: {
      symbol: "	B$",
      num: 96,
      places: 2,
      name: "Brunei dollar",
      countries: ["Brunei", "auxiliary in Singapore (SG)"]
    },
		BOB: {
      symbol: "Bs.",
      num: 68,
      places: 2,
      name: "Boliviano",
      countries: ["Bolivia"]
    },
		BOV: {
      symbol: "",
      num: 984,
      places: 2,
      name: "Bolivian Mvdol (funds code)",
      countries: ["Bolivia"]
    },
		BRL: {
      symbol: "R$",
      num: 986,
      places: 2,
      name: "Brazilian real",
      countries: ["Brazil"]
    },
		BSD: {
      symbol: "B$",
      num: 44,
      places: 2,
      name: "Bahamian dollar",
      countries: ["Bahamas"]
    },
		BTN: {
      symbol: "Nu.",
      num: 64,
      places: 2,
      name: "Bhutanese ngultrum",
      countries: ["Bhutan"]
    },
		BWP: {
      symbol: "P",
      num: 72,
      places: 2,
      name: "Botswana pula",
      countries: ["Botswana"]
    },
		BYN: {
      symbol: "Br",
      num: 933,
      places: 2,
      name: "Belarusian ruble",
      countries: ["Belarus"]
    },
		BYR: {
      symbol: "Br",
      num: 974,
      places: 0,
      name: "Belarusian ruble",
      countries: ["Belarus"]
    },
		BZD: {
      symbol: "BZ$",
      num: 84,
      places: 2,
      name: "Belize dollar",
      countries: ["Belize"]
    },
		CAD: {
      symbol: "C$",
      num: 124,
      places: 2,
      name: "Canadian dollar",
      countries: ["Canada"]
    },
		CDF: {
      symbol: "FC",
      num: 976,
      places: 2,
      name: "Congolese franc",
      countries: ["Democratic Republic of the Congo"]
    },
		CHE: {
      symbol: "",
      num: 947,
      places: 2,
      name: "WIR Euro (complementary currency)",
      countries: ["Switzerland"]
    },
		CHF: {
      symbol: "SFr.",
      num: 756,
      places: 2,
      name: "Swiss franc",
      countries: ["Switzerland", "Liechtenstein (LI)"]
    },
		CHW: {
      symbol: "",
      num: 948,
      places: 2,
      name: "WIR Franc (complementary currency)",
      countries: ["Switzerland"]
    },
		CLF: {
      symbol: "",
      num: 990,
      places: 4,
      name: "Unidad de Fomento (funds code)",
      countries: ["Chile"]
    },
		CLP: {
      symbol: "$",
      num: 152,
      places: 0,
      name: "Chilean peso",
      countries: ["Chile"]
    },
		CNY: {
      symbol: "¥",
      num: 156,
      places: 2,
      name: "Chinese yuan",
      countries: ["China"]
    },
		COP: {
      symbol: "$",
      num: 170,
      places: 2,
      name: "Colombian peso",
      countries: ["Colombia"]
    },
		COU: {
      symbol: "",
      num: 970,
      places: 2,
      name: "Unidad de Valor Real (UVR) (funds code)",
      countries: ["Colombia"]
    },
		CRC: {
      symbol: "₡",
      num: 188,
      places: 2,
      name: "Costa Rican colon",
      countries: ["Costa Rica"]
    },
		CUC: {
      symbol: "CUC$",
      num: 931,
      places: 2,
      name: "Cuban convertible peso",
      countries: ["Cuba"]
    },
		CUP: {
      symbol: "$MN",
      num: 192,
      places: 2,
      name: "Cuban peso",
      countries: ["Cuba"]
    },
		CVE: {
      symbol: "$",
      num: 132,
      places: 0,
      name: "Cape Verde escudo",
      countries: ["Cape Verde"]
    },
		CZK: {
      symbol: "Kč",
      num: 203,
      places: 2,
      name: "Czech koruna",
      countries: ["Czech Republic"]
    },
		DJF: {
      symbol: "Fdj",
      num: 262,
      places: 0,
      name: "Djiboutian franc",
      countries: ["Djibouti"]
    },
		DKK: {
      symbol: "kr.",
      num: 208,
      places: 2,
      name: "Danish krone",
      countries: ["Denmark", "Faroe Islands (FO)", "Greenland (GL)"]
    },
		DOP: {
      symbol: "RD$",
      num: 214,
      places: 2,
      name: "Dominican peso",
      countries: ["Dominican Republic"]
    },
		DZD: {
      symbol: "DA",
      num: 12,
      places: 2,
      name: "Algerian dinar",
      countries: ["Algeria"]
    },
		EGP: {
      symbol: "E£",
      num: 818,
      places: 2,
      name: "Egyptian pound",
      countries: ["Egypt", "auxiliary in Gaza Strip"]
    },
		ERN: {
      symbol: "Nfk",
      num: 232,
      places: 2,
      name: "Eritrean nakfa",
      countries: ["Eritrea"]
    },
		ETB: {
      symbol: "Br",
      num: 230,
      places: 2,
      name: "Ethiopian birr",
      countries: ["Ethiopia"]
    },
		EUR: {
      symbol: "€",
      num: 978,
      places: 2,
      name: "Euro",
      countries: ["Akrotiri and Dhekelia", "Andorra (AD)", "Austria (AT)", "Belgium (BE)", "Cyprus (CY)", "Estonia (EE)", "Finland (FI)", "France (FR)", "Germany (DE)", "Greece (GR)", "Guadeloupe (GP)", "Ireland (IE)", "Italy (IT)", "Kosovo", "Latvia (LV)", "Lithuania (LT)", "Luxembourg (LU)", "Malta (MT)", "Martinique (MQ)", "Mayotte (YT)", "Monaco (MC)", "Montenegro (ME)", "Netherlands (NL)", "Portugal (PT)", "Réunion (RE)", "Saint Barthélemy (BL)", "Saint Pierre and Miquelon (PM)", "San Marino (SM)", "Slovakia (SK)", "Slovenia (SI)", "Spain (ES)", "Vatican City (VA); see Eurozone"]
    },
		FJD: {
      symbol: "FJ$",
      num: 242,
      places: 2,
      name: "Fiji dollar",
      countries: ["Fiji"]
    },
		FKP: {
      symbol: "£",
      num: 238,
      places: 2,
      name: "Falkland Islands pound",
      countries: ["Falkland Islands (pegged to GBP 1:1)"]
    },
		GBP: {
      symbol: "£",
      num: 826,
      places: 2,
      name: "Pound sterling",
      countries: ["United Kingdom", "the Isle of Man (IM", "see Manx pound)", "Jersey (JE", "see Jersey pound)", "Guernsey (GG", "see Guernsey pound)", "South Georgia and the South Sandwich Islands (GS)", "British Indian Ocean Territory (IO) (also uses USD)", "Tristan da Cunha (SH-TA)", "and British Antarctic Territory"]
    },
		GEL: {
      symbol: "₾",
      num: 981,
      places: 2,
      name: "Georgian lari",
      countries: ["Georgia (except Abkhazia (GE-AB) and South Ossetia)"]
    },
		GHS: {
      symbol: "GH₵",
      num: 936,
      places: 2,
      name: "Ghanaian cedi",
      countries: ["Ghana"]
    },
		GIP: {
      symbol: "£",
      num: 292,
      places: 2,
      name: "Gibraltar pound",
      countries: ["Gibraltar (pegged to GBP 1:1)"]
    },
		GMD: {
      symbol: "D",
      num: 270,
      places: 2,
      name: "Gambian dalasi",
      countries: ["Gambia"]
    },
		GNF: {
      symbol: "FG",
      num: 324,
      places: 0,
      name: "Guinean franc",
      countries: ["Guinea"]
    },
		GTQ: {
      symbol: "Q",
      num: 320,
      places: 2,
      name: "Guatemalan quetzal",
      countries: ["Guatemala"]
    },
		GYD: {
      symbol: "G$",
      num: 328,
      places: 2,
      name: "Guyanese dollar",
      countries: ["Guyana"]
    },
		HKD: {
      symbol: "HK$",
      num: 344,
      places: 2,
      name: "Hong Kong dollar",
      countries: ["Hong Kong", "Macao (MO)"]
    },
		HNL: {
      symbol: "L",
      num: 340,
      places: 2,
      name: "Honduran lempira",
      countries: ["Honduras"]
    },
		HRK: {
      symbol: "kn",
      num: 191,
      places: 2,
      name: "Croatian kuna",
      countries: ["Croatia"]
    },
		HTG: {
      symbol: "G",
      num: 332,
      places: 2,
      name: "Haitian gourde",
      countries: ["Haiti"]
    },
		HUF: {
      symbol: "",
      num: 348,
      places: 2,
      name: "Hungarian forint",
      countries: ["Hungary"]
    },
		IDR: {
      symbol: "",
      num: 360,
      places: 2,
      name: "Indonesian rupiah",
      countries: ["Indonesia"]
    },
		ILS: {
      symbol: "",
      num: 376,
      places: 2,
      name: "Israeli new shekel",
      countries: ["Israel", "State of Palestine (PS)"]
    },
		INR: {
      symbol: "",
      num: 356,
      places: 2,
      name: "Indian rupee",
      countries: ["India", "Bhutan", "Nepal", "Zimbabwe"]
    },
		IQD: {
      symbol: "",
      num: 368,
      places: 3,
      name: "Iraqi dinar",
      countries: ["Iraq"]
    },
		IRR: {
      symbol: "",
      num: 364,
      places: 2,
      name: "Iranian rial",
      countries: ["Iran"]
    },
		ISK: {
      symbol: "",
      num: 352,
      places: 0,
      name: "Icelandic króna",
      countries: ["Iceland"]
    },
		JMD: {
      symbol: "",
      num: 388,
      places: 2,
      name: "Jamaican dollar",
      countries: ["Jamaica"]
    },
		JOD: {
      symbol: "",
      num: 400,
      places: 3,
      name: "Jordanian dinar",
      countries: ["Jordan", "auxiliary in West Bank"]
    },
		JPY: {
      symbol: "",
      num: 392,
      places: 0,
      name: "Japanese yen",
      countries: ["Japan"]
    },
		KES: {
      symbol: "",
      num: 404,
      places: 2,
      name: "Kenyan shilling",
      countries: ["Kenya"]
    },
		KGS: {
      symbol: "",
      num: 417,
      places: 2,
      name: "Kyrgyzstani som",
      countries: ["Kyrgyzstan"]
    },
		KHR: {
      symbol: "",
      num: 116,
      places: 2,
      name: "Cambodian riel",
      countries: ["Cambodia"]
    },
		KMF: {
      symbol: "",
      num: 174,
      places: 0,
      name: "Comoro franc",
      countries: ["Comoros"]
    },
		KPW: {
      symbol: "",
      num: 408,
      places: 2,
      name: "North Korean won",
      countries: ["North Korea"]
    },
		KRW: {
      symbol: "",
      num: 410,
      places: 0,
      name: "South Korean won",
      countries: ["South Korea"]
    },
		KWD: {
      symbol: "",
      num: 414,
      places: 3,
      name: "Kuwaiti dinar",
      countries: ["Kuwait"]
    },
		KYD: {
      symbol: "",
      num: 136,
      places: 2,
      name: "Cayman Islands dollar",
      countries: ["Cayman Islands"]
    },
		KZT: {
      symbol: "",
      num: 398,
      places: 2,
      name: "Kazakhstani tenge",
      countries: ["Kazakhstan"]
    },
		LAK: {
      symbol: "",
      num: 418,
      places: 2,
      name: "Lao kip",
      countries: ["Laos"]
    },
		LBP: {
      symbol: "",
      num: 422,
      places: 2,
      name: "Lebanese pound",
      countries: ["Lebanon"]
    },
		LKR: {
      symbol: "",
      num: 144,
      places: 2,
      name: "Sri Lankan rupee",
      countries: ["Sri Lanka"]
    },
		LRD: {
      symbol: "",
      num: 430,
      places: 2,
      name: "Liberian dollar",
      countries: ["Liberia"]
    },
		LSL: {
      symbol: "",
      num: 426,
      places: 2,
      name: "Lesotho loti",
      countries: ["Lesotho"]
    },
		LYD: {
      symbol: "",
      num: 434,
      places: 3,
      name: "Libyan dinar",
      countries: ["Libya"]
    },
		MAD: {
      symbol: "",
      num: 504,
      places: 2,
      name: "Moroccan dirham",
      countries: ["Morocco"]
    },
		MDL: {
      symbol: "",
      num: 498,
      places: 2,
      name: "Moldovan leu",
      countries: ["Moldova (except Transnistria)"]
    },
		MGA: {
      symbol: "",
      num: 969,
      places: 1,
      name: "Malagasy ariary",
      countries: ["Madagascar"]
    },
		MKD: {
      symbol: "",
      num: 807,
      places: 2,
      name: "Macedonian denar",
      countries: ["Macedonia"]
    },
		MMK: {
      symbol: "",
      num: 104,
      places: 2,
      name: "Myanmar kyat",
      countries: ["Myanmar"]
    },
		MNT: {
      symbol: "",
      num: 496,
      places: 2,
      name: "Mongolian tögrög",
      countries: ["Mongolia"]
    },
		MOP: {
      symbol: "",
      num: 446,
      places: 2,
      name: "Macanese pataca",
      countries: ["Macao"]
    },
		MRO: {
      symbol: "",
      num: 478,
      places: 1,
      name: "Mauritanian ouguiya",
      countries: ["Mauritania"]
    },
		MUR: {
      symbol: "",
      num: 480,
      places: 2,
      name: "Mauritian rupee",
      countries: ["Mauritius"]
    },
		MVR: {
      symbol: "",
      num: 462,
      places: 2,
      name: "Maldivian rufiyaa",
      countries: ["Maldives"]
    },
		MWK: {
      symbol: "",
      num: 454,
      places: 2,
      name: "Malawian kwacha",
      countries: ["Malawi"]
    },
		MXN: {
      symbol: "",
      num: 484,
      places: 2,
      name: "Mexican peso",
      countries: ["Mexico"]
    },
		MXV: {
      symbol: "",
      num: 979,
      places: 2,
      name: "Mexican Unidad de Inversion (UDI) (funds code)",
      countries: ["Mexico"]
    },
		MYR: {
      symbol: "",
      num: 458,
      places: 2,
      name: "Malaysian ringgit",
      countries: ["Malaysia"]
    },
		MZN: {
      symbol: "",
      num: 943,
      places: 2,
      name: "Mozambican metical",
      countries: ["Mozambique"]
    },
		NAD: {
      symbol: "",
      num: 516,
      places: 2,
      name: "Namibian dollar",
      countries: ["Namibia"]
    },
		NGN: {
      symbol: "",
      num: 566,
      places: 2,
      name: "Nigerian naira",
      countries: ["Nigeria"]
    },
		NIO: {
      symbol: "",
      num: 558,
      places: 2,
      name: "Nicaraguan córdoba",
      countries: ["Nicaragua"]
    },
		NOK: {
      symbol: "",
      num: 578,
      places: 2,
      name: "Norwegian krone",
      countries: ["Norway", "Svalbard and Jan Mayen (SJ)", "Bouvet Island (BV)", "Queen Maud Land", "Peter I Island"]
    },
		NPR: {
      symbol: "",
      num: 524,
      places: 2,
      name: "Nepalese rupee",
      countries: ["Nepal"]
    },
		NZD: {
      symbol: "",
      num: 554,
      places: 2,
      name: "New Zealand dollar",
      countries: ["New Zealand", "Cook Islands (CK)", "Niue (NU)", "Pitcairn Islands (PN; see also Pitcairn Islands dollar)", "Tokelau (TK)", "Ross Dependency"]
    },
		OMR: {
      symbol: "",
      num: 512,
      places: 3,
      name: "Omani rial",
      countries: ["Oman"]
    },
		PAB: {
      symbol: "",
      num: 590,
      places: 2,
      name: "Panamanian balboa",
      countries: ["Panama"]
    },
		PEN: {
      symbol: "",
      num: 604,
      places: 2,
      name: "Peruvian Sol",
      countries: ["Peru"]
    },
		PGK: {
      symbol: "",
      num: 598,
      places: 2,
      name: "Papua New Guinean kina",
      countries: ["Papua New Guinea"]
    },
		PHP: {
      symbol: "",
      num: 608,
      places: 2,
      name: "Philippine peso",
      countries: ["Philippines"]
    },
		PKR: {
      symbol: "",
      num: 586,
      places: 2,
      name: "Pakistani rupee",
      countries: ["Pakistan"]
    },
		PLN: {
      symbol: "",
      num: 985,
      places: 2,
      name: "Polish złoty",
      countries: ["Poland"]
    },
		PYG: {
      symbol: "",
      num: 600,
      places: 0,
      name: "Paraguayan guaraní",
      countries: ["Paraguay"]
    },
		QAR: {
      symbol: "",
      num: 634,
      places: 2,
      name: "Qatari riyal",
      countries: ["Qatar"]
    },
		RON: {
      symbol: "",
      num: 946,
      places: 2,
      name: "Romanian leu",
      countries: ["Romania"]
    },
		RSD: {
      symbol: "",
      num: 941,
      places: 2,
      name: "Serbian dinar",
      countries: ["Serbia"]
    },
		RUB: {
      symbol: "",
      num: 643,
      places: 2,
      name: "Russian ruble",
      countries: ["Russia", "Abkhazia (GE-AB)", "South Ossetia", "Crimea"]
    },
		RWF: {
      symbol: "",
      num: 646,
      places: 0,
      name: "Rwandan franc",
      countries: ["Rwanda"]
    },
		SAR: {
      symbol: "",
      num: 682,
      places: 2,
      name: "Saudi riyal",
      countries: ["Saudi Arabia"]
    },
		SBD: {
      symbol: "",
      num: 90,
      places: 2,
      name: "Solomon Islands dollar",
      countries: ["Solomon Islands"]
    },
		SCR: {
      symbol: "",
      num: 690,
      places: 2,
      name: "Seychelles rupee",
      countries: ["Seychelles"]
    },
		SDG: {
      symbol: "",
      num: 938,
      places: 2,
      name: "Sudanese pound",
      countries: ["Sudan"]
    },
		SEK: {
      symbol: "",
      num: 752,
      places: 2,
      name: "Swedish krona/kronor",
      countries: ["Sweden"]
    },
		SGD: {
      symbol: "",
      num: 702,
      places: 2,
      name: "Singapore dollar",
      countries: ["Singapore", "auxiliary in Brunei (BN)"]
    },
		SHP: {
      symbol: "",
      num: 654,
      places: 2,
      name: "Saint Helena pound",
      countries: ["Saint Helena (SH-SH)", "Ascension Island (SH-AC) (pegged to GBP 1:1)"]
    },
		SLL: {
      symbol: "",
      num: 694,
      places: 2,
      name: "Sierra Leonean leone",
      countries: ["Sierra Leone"]
    },
		SOS: {
      symbol: "",
      num: 706,
      places: 2,
      name: "Somali shilling",
      countries: ["Somalia (except Somaliland)"]
    },
		SRD: {
      symbol: "",
      num: 968,
      places: 2,
      name: "Surinamese dollar",
      countries: ["Suriname"]
    },
		SSP: {
      symbol: "",
      num: 728,
      places: 2,
      name: "South Sudanese pound",
      countries: ["South Sudan"]
    },
		STD: {
      symbol: "",
      num: 678,
      places: 2,
      name: "São Tomé and Príncipe dobra",
      countries: ["São Tomé and Príncipe"]
    },
		SVC: {
      symbol: "",
      num: 222,
      places: 2,
      name: "Salvadoran colón",
      countries: ["El Salvador"]
    },
		SYP: {
      symbol: "",
      num: 760,
      places: 2,
      name: "Syrian pound",
      countries: ["Syria"]
    },
		SZL: {
      symbol: "",
      num: 748,
      places: 2,
      name: "Swazi lilangeni",
      countries: ["Swaziland"]
    },
		THB: {
      symbol: "",
      num: 764,
      places: 2,
      name: "Thai baht",
      countries: ["Thailand", "Cambodia", "Myanmar", "Laos"]
    },
		TJS: {
      symbol: "",
      num: 972,
      places: 2,
      name: "Tajikistani somoni",
      countries: ["Tajikistan"]
    },
		TMT: {
      symbol: "",
      num: 934,
      places: 2,
      name: "Turkmenistani manat",
      countries: ["Turkmenistan"]
    },
		TND: {
      symbol: "",
      num: 788,
      places: 3,
      name: "Tunisian dinar",
      countries: ["Tunisia"]
    },
		TOP: {
      symbol: "",
      num: 776,
      places: 2,
      name: "Tongan paʻanga",
      countries: ["Tonga"]
    },
		TRY: {
      symbol: "",
      num: 949,
      places: 2,
      name: "Turkish lira",
      countries: ["Turkey", "Northern Cyprus"]
    },
		TTD: {
      symbol: "",
      num: 780,
      places: 2,
      name: "Trinidad and Tobago dollar",
      countries: ["Trinidad and Tobago"]
    },
		TWD: {
      symbol: "",
      num: 901,
      places: 2,
      name: "New Taiwan dollar",
      countries: ["Taiwan"]
    },
		TZS: {
      symbol: "",
      num: 834,
      places: 2,
      name: "Tanzanian shilling",
      countries: ["Tanzania"]
    },
		UAH: {
      symbol: "",
      num: 980,
      places: 2,
      name: "Ukrainian hryvnia",
      countries: ["Ukraine"]
    },
		UGX: {
      symbol: "",
      num: 800,
      places: 0,
      name: "Ugandan shilling",
      countries: ["Uganda"]
    },
		USD: {
      symbol: "",
      num: 840,
      places: 2,
      name: "United States dollar",
      countries: ["United States", "American Samoa (AS)", "Barbados (BB) (as well as Barbados Dollar)", "Bermuda (BM) (as well as Bermudian Dollar)", "British Indian Ocean Territory (IO) (also uses GBP)", "British Virgin Islands (VG)", "Caribbean Netherlands (BQ - Bonaire", "Sint Eustatius and Saba)", "Ecuador (EC)", "El Salvador (SV)", "Guam (GU)", "Haiti (HT)", "Marshall Islands (MH)", "Federated States of Micronesia (FM)", "Northern Mariana Islands (MP)", "Palau (PW)", "Panama (PA)", "Puerto Rico (PR)", "Timor-Leste (TL)", "Turks and Caicos Islands (TC)", "U.S. Virgin Islands (VI)", "Zimbabwe (ZW)"]
    },
		USN: {
      symbol: "",
      num: 997,
      places: 2,
      name: "United States dollar (next day) (funds code)",
      countries: ["United States"]
    },
		UYI: {
      symbol: "",
      num: 940,
      places: 0,
      name: "Uruguay Peso en Unidades Indexadas (URUIURUI) (funds code)",
      countries: ["Uruguay"]
    },
		UYU: {
      symbol: "",
      num: 858,
      places: 2,
      name: "Uruguayan peso",
      countries: ["Uruguay"]
    },
		UZS: {
      symbol: "",
      num: 860,
      places: 2,
      name: "Uzbekistan som",
      countries: ["Uzbekistan"]
    },
		VEF: {
      symbol: "",
      num: 937,
      places: 2,
      name: "Venezuelan bolívar",
      countries: ["Venezuela"]
    },
		VND: {
      symbol: "",
      num: 704,
      places: 0,
      name: "Vietnamese dong",
      countries: ["Vietnam"]
    },
		VUV: {
      symbol: "",
      num: 548,
      places: 0,
      name: "Vanuatu vatu",
      countries: ["Vanuatu"]
    },
		WST: {
      symbol: "",
      num: 882,
      places: 2,
      name: "Samoan tala",
      countries: ["Samoa"]
    },
		XAF: {
      symbol: "",
      num: 950,
      places: 0,
      name: "CFA franc BEAC",
      countries: ["Cameroon (CM)", "Central African Republic (CF)", "Republic of the Congo (CG)", "Chad (TD)", "Equatorial Guinea (GQ)", "Gabon (GA)"]
    },
		XAG: {
      symbol: "",
      num: 961,
      places: -1,
      name: "Silver (one troy ounce)",
      countries: []
    },
		XAU: {
      symbol: "",
      num: 959,
      places: -1,
      name: "Gold (one troy ounce)",
      countries: []
    },
		XBA: {
      symbol: "",
      num: 955,
      places: -1,
      name: "European Composite Unit (EURCO) (bond market unit)",
      countries: []
    },
		XBB: {
      symbol: "",
      num: 956,
      places: -1,
      name: "European Monetary Unit (E.M.U.-6) (bond market unit)",
      countries: []
    },
		XBC: {
      symbol: "",
      num: 957,
      places: -1,
      name: "European Unit of Account 9 (E.U.A.-9) (bond market unit)",
      countries: []
    },
		XBD: {
      symbol: "",
      num: 958,
      places: -1,
      name: "European Unit of Account 17 (E.U.A.-17) (bond market unit)",
      countries: []
    },
		XCD: {
      symbol: "",
      num: 951,
      places: 2,
      name: "East Caribbean dollar",
      countries: ["Anguilla (AI)", "Antigua and Barbuda (AG)", "Dominica (DM)", "Grenada (GD)", "Montserrat (MS)", "Saint Kitts and Nevis (KN)", "Saint Lucia (LC)", "Saint Vincent and the Grenadines (VC)"]
    },
		XDR: {
      symbol: "",
      num: 960,
      places: -1,
      name: "Special drawing rights",
      countries: ["International Monetary Fund"]
    },
		XOF: {
      symbol: "",
      num: 952,
      places: 0,
      name: "CFA franc BCEAO",
      countries: ["Benin (BJ)", "Burkina Faso (BF)", "Côte d'Ivoire (CI)", "Guinea-Bissau (GW)", "Mali (ML)", "Niger (NE)", "Senegal (SN)", "Togo (TG)"]
    },
		XPD: {
      symbol: "",
      num: 964,
      places: -1,
      name: "Palladium (one troy ounce)",
      countries: []
    },
		XPF: {
      symbol: "",
      num: 953,
      places: 0,
      name: "CFP franc (franc Pacifique)",
      countries: ["French territories of the Pacific Ocean: French Polynesia (PF)", "New Caledonia (NC)", "Wallis and Futuna (WF)"]
    },
		XPT: {
      symbol: "",
      num: 962,
      places: -1,
      name: "Platinum (one troy ounce)",
      countries: []
    },
		XSU: {
      symbol: "",
      num: 994,
      places: -1,
      name: "SUCRE",
      countries: ["Unified System for Regional Compensation (SUCRE)"]
    },
		XTS: {
      symbol: "",
      num: 963,
      places: -1,
      name: "Code reserved for testing purposes",
      countries: []
    },
		XUA: {
      symbol: "",
      num: 965,
      places: -1,
      name: "ADB Unit of Account",
      countries: ["African Development Bank"]
    },
		XXX: {
      symbol: "",
      num: 999,
      places: -1,
      name: "No currency",
      countries: []
    },
		YER: {
      symbol: "",
      num: 886,
      places: 2,
      name: "Yemeni rial",
      countries: ["Yemen"]
    },
		ZAR: {
      symbol: "",
      num: 710,
      places: 2,
      name: "South African rand",
      countries: ["South Africa"]
    },
		ZMW: {
      symbol: "",
      num: 967,
      places: 2,
      name: "Zambian kwacha",
      countries: ["Zambia"]
    },
		ZWL: {
      symbol: "",
      num: 932,
      places: 2,
      name: "Zimbabwean dollar A/10",
      countries: ["Zimbabwe"]
    },
	}