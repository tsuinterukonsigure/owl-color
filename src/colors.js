
const pureWhite = {
    rgb: [255, 255, 255],
    hex: '#ffffff'
};

const pureBlack = {
    rgb: [0, 0, 0],
    hex: '#000000'
};

const colors = {
    CDH: {
        fullName = 'Chengdu Hunters',
        maincolor = 'orange',
        seconcolor = 'black',
        colors = {
            black: pureBlack,
            orange: {
                rgb: [233, 156, 37],
                hex: '#e99c25'
            }
        }
    },
    SHD: {
        fullName = 'Shanghai Drangons',
        maincolor = 'red',
        seconcolor = 'black',
        colors = {
            black: pureBlack,
            red: {
                rgb: [207, 24, 24],
                hex: '#cf1818'
            },
            yellow: {
                rgb: [255, 245, 0],
                hex: '#fff500'
            }
        }
    },
    HZS: {
        fullName = 'Hangzhou Spark',
        maincolor = 'pink',
        seconcolor = 'white',
        colors = {
            white: pureWhite,
            pink: {
                rgb: [255, 93, 154],
                hex: '#ff5d9a'
            },
            blue: {
                rgb: [60, 78, 196],
                hex: '#3c4ec4'
            }
        }
    },
    GZC: {
        fullName = 'Guangzhou Charge',
        maincolor = 'navy_dark',
        seconcolor = 'navy_light',
        colors = {
            white: pureWhite,
            navy_dark: {
                rgb: [10, 54, 76],
                hex: '#0a364c'
            },
            navy_light: {
                rgb: [75, 151, 166],
                hex: '#4b97a6'
            }
        }
    },
    DAL: {
        fullName = 'Dallas Fuel',
        maincolor = 'blue',
        seconcolor = 'white',
        colors = {
            white: pureWhite,
            blue: {
                rgb: [20, 100, 218],
                hex: '#1464da'
            }
        }
    },
    PHI: {
        fullName = 'Philadelphia Fusion',
        maincolor = 'black',
        seconcolor = 'orange',
        colors = {
            black: pureBlack,
            orange: {
                rgb: [255, 146, 52],
                hex: '#ff9234'
            }
        }
    },
    TOR: {
        fullName = 'Toronto Defiant',
        maincolor = 'red',
        seconcolor = 'black',
        colors = {
            black: pureBlack,
            red: {
                rgb: [183, 13, 13],
                hex: '#b70d0d'
            }
        }
    },
    NYE: {
        fullName = 'New York Excelsior',
        maincolor = 'blue',
        seconcolor = 'red',
        colors = {
            blue: {
                rgb: [20, 85, 198],
                hex: '#1455c6'
            },
            red: {
                rgb: [255, 0, 0],
                hex: '#ff0000'
            }
        }
    },
    SEO: {
        fullName = 'Seoul Dynasty',
        maincolor = 'black',
        seconcolor = 'golden',
        colors = {
            black: pureBlack,
            golden: {
                rgb: [179, 167, 47],
                hex: '#b3a72f'
            }
        }
    },
    LDN: {
        fullName = 'London Spitfire',
        maincolor = 'lightblue',
        seconcolor = 'orange',
        colors = {
            lightblue: {
                rgb: [0, 251, 255],
                hex: '#00fbff'
            },
            orange: {
                rgb: [255, 119, 0],
                hex: '#ff7700'
            }
        }
    },
    PAR: {
        fullName = 'Paris Eternal',
        maincolor = 'graybule',
        seconcolor = 'darkred',
        colors = {
            graybule: {
                rgb: [54, 69, 108],
                hex: '#36456c'
            },
            darkred: {
                rgb: [119, 22, 47],
                hex: '#77162f'
            }
        }
    },
    GLA: {
        fullName = 'Los Angeles Gladiators',
        maincolor = 'purple',
        seconcolor = 'white',
        colors = {
            white: pureWhite,
            purple: {
                rgb: [98, 22, 119],
                hex: '#621677'
            }
        }
    },
    SFS: {
        fullName = 'San Francisco Shock',
        maincolor = 'orange',
        seconcolor = 'gray',
        colors = {
            orange: {
                rgb: [213, 64, 15],
                hex: '#d5400f'
            },
            gray: {
                rgb: [149, 149, 149],
                hex: '#959595'
            }
        }
    },
    FLA: {
        fullName = 'Florida Mayhem',
        maincolor = 'black',
        seconcolor = 'vampo',
        colors = {
            black: pureBlack,
            vampo: {
                rgb: [220, 16, 176],
                hex: '#DC10B0'
            }
        }
    },
    ATL: {
        fullName = 'Atlanta Reign',
        maincolor = 'gray',
        seconcolor = 'red',
        colors = {
            gray: {
                rgb: [216, 216, 216],
                hex: '#d8d8d8'
            },
            red: {
                rgb: [103, 0, 0],
                hex: '#670000'
            }
        }
    },
    HOU: {
        fullName = 'Howston Outlaws',
        maincolor = 'black',
        seconcolor = 'green',
        colors = {
            black: pureBlack,
            green: {
                rgb: [120, 210, 58],
                hex: '#78d23a'
            }
        }
    },
    VAN: {
        fullName = 'Vancover Titans',
        maincolor = 'blue',
        seconcolor = 'green',
        colors = {
            blue: {
                rgb: [0, 38, 150],
                hex: '#002696'
            },
            green: {
                rgb: [28, 179, 6],
                hex: '#1cb306'
            }
        }
    },
    VAL: {
        fullName = 'Los Angeles Valiant',
        maincolor = 'blue',
        seconcolor = 'yellow',
        colors = {
            blue: {
                rgb: [14, 118, 205],
                hex: '0e76cd'
            },
            yellow: {
                rgb: [255, 209, 0],
                hex: '#ffd100'
            }
        }
    },
    WAS: {
        fullName = 'Washington Justice',
        maincolor = 'red',
        seconcolor = 'white',
        colors = {
            white: pureWhite,
            red: {
                rgb: [145, 17, 61],
                hex: '#91113d'
            }
        }
    },
    BOS: {
        fullName = 'Boston Uprising',
        maincolor = 'blue',
        seconcolor = 'yellow',
        colors = {
            blue: {
                rgb: [19, 67, 168],
                hex: '#1343a8'
            },
            yellow: {
                rgb: [195, 202, 20],
                hex: '#c3ca14'
            }
        }
    }
};

export default colors;
