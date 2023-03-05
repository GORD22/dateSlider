import {makeStyles} from "@material-ui/core";

export const useStyles = makeStyles({
    root: {
        width: '100%',
        '@media(max-width: 1280px)': {}
    },

    rail: {
        height: '10px',
        borderRadius: '100px',
        background: '#EDF1F8',
        '@media(max-width: 560px)': {
            height: '8px',
        },
    },

    track: {
        height: '6px',
        background: '#5CADEA',
        top: "54%",
        '@media(max-width: 560px)': {
            height: '4px',
            top: "53%",
        },
    },

    thumb: {
        width: '20px',
        height: '20px',
        marginTop: '-5px',
        marginLeft: '-10px',
        background: '#FFFFFF',
        border: '5px solid #5CADEA',
        transform: 'rotate(-90deg)',
        '&:hover, &:focus': {
            boxShadow: 'none'
        },
        "&:nth-child(24n + 31)": {
            transform: 'rotate(-270deg)',
            "& > span > span > span": {
                transform: 'rotate(-90deg)',
            },
        },
        "& > span": {
            top: '-42px',
            left: '7px',
            display: 'inline-block',
            '@media(max-width: 1280px)': {
                top: '-26px',
                left: '3px',
            },
            '@media(max-width: 560px)': {
                top: '-19px',
                left: '-5px',
            },
            '@media(max-width: 510px)': {
                top: '-13px',
                left: '-9px',
            },
        },
        "& > span > span": {
            minWidth: '66px',
            minHeight: '112px',
            marginLeft: '26px',
            position: 'relative',
            borderRadius: '10px',
            transform: 'rotate(0deg)',
            background: '#FFFFFF',
            '@media(max-width: 1280px)': {
                minWidth: '50px',
                minHeight: '80px',
            },
            '@media(max-width: 560px)': {
                minWidth: '40px',
                minHeight: '60px',
            },
            '@media(max-width: 510px)': {
                minWidth: '30px',
                minHeight: '50px',
            },
            '&:before': {
                content: "''",
                height: '4px',
                position: 'absolute',
                right: '76%',
                top: 'calc(50% - 12px)',
                borderTop: '12px solid transparent',
                borderRight: '24px solid #FFFFFF',
                borderBottom: '12px solid transparent',
                borderRadius: '3px',
                '@media(max-width: 1280px)': {
                    right: '65%',
                    height: '2px',
                },
                '@media(max-width: 560px)': {
                    right: '54%',
                    height: '2px',
                },
                '@media(max-width: 510px)': {
                    right: '39%',
                    height: '1px',
                },
            },
        },
        "& > span > span > span": {
            position: 'relative',
            fontFamily: 'Raleway',
            fontVariant: 'lining-nums',
            fontStyle: 'normal',
            fontWeight: '600',
            fontSize: '18px',
            lineHeight: '24px',
            textAlign: 'center',
            color: '#0167B3',
            transform: 'rotate(90deg)',
            '@media(max-width: 1280px)': {
                fontSize: '14px',
            },
            '@media(max-width: 560px)': {
                fontSize: '12px',
                lineHeight: '16px',
            },
            '@media(max-width: 510px)': {
                fontSize: '10px',
                lineHeight: '14px',
            },
        },
        '@media(max-width: 560px)': {
            width: '15px',
            height: '15px',
            marginTop: '-3px',
            border: '4px solid #5CADEA',
        },
        '@media(max-width: 510px)': {
            width: '12px',
            height: '12px',
            marginTop: '-3px',
            border: '3px solid #5CADEA',
        },
    },

    mark: {
        width: '0',
        height: '0',
    },

    markLabel: {
        fontFamily: 'Raleway',
        fontVariant: 'lining-nums',
        color: '#999999',
        fontStyle: 'normal',
        fontWeight: '600',
        fontSize: '14px',
        lineHeight: '18px',
        fontFeatureSettings: '"pnum" on, "lnum" on',
        marginTop: '13px',
        '@media(max-width: 1440px)': {
            marginTop: '5px',
        },
        '@media(max-width: 1280px)': {
            marginTop: '2px',
            fontSize: '12px',
        },
        '@media(max-width: 630px)': {
            marginTop: '0',
            fontSize: '10px',
        },
        '@media(max-width: 560px)': {
            marginTop: '-6px',
            fontSize: '10px',
        },
        '@media(max-width: 510px)': {
            marginTop: '-10px',
            fontSize: '8px',
        },
    },

    markLabelMonth: {
        "&:nth-child(24n+5)": {
            color: '#333333'
        },
        '@media(max-width: 1280px)': {
            fontSize: '11px',
        },
        '@media(max-width: 920px)': {
            fontSize: '9px',
        },
        '@media(max-width: 780px)': {
            fontSize: '8px',
        },
        '@media(max-width: 560px)': {
            fontSize: '6px',
        },
        '@media(max-width: 510px)': {
            fontSize: '5px',
        },
    },
});