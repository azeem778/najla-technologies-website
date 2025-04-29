import { Trans } from "react-i18next"

export const ServiceData = (t) => [
    {
        id:1,
        img:'web-development.png',
        title: t('Web Development'),
        desc: <Trans i18nKey="web-desc" components={{span: <strong></strong>}}></Trans>  
    },
    {
        id:2,
        img:'app.png',
        title: t('Mobile Development'),
        desc:<Trans i18nKey="mobile-desc" components={{span: <strong></strong>}}></Trans>   
    },
    {
        id:3,
        img:'ui-ux.png',
        title: t('UI/UX Design'),
        desc: t('First impressions matter. Our UI/UX design services ensure your website or app is visually appealing, easy to navigate, and optimized for user satisfaction.')  
    },
    {
        id:4,
        img:'consultant.png',
        title: t('IT Consultancy'),
        desc: t('Not sure where to start? Our IT consultancy services provide expert guidance to help you identify the right technology solutions for your business goals.' ) 
    },
    {
        id:5,
        img:'qa.png',
        title: t('QA & Testing'),
        desc: t('Quality is our priority. We conduct rigorous testing to ensure your website, app, or software is bug-free, secure, and performs flawlessly.')  
    },
    {
        id:6,
        img:'cyber.png',
        title: t('Cyber Security'),
        desc: <Trans i18nKey="cyber-desc" components={{span: <strong></strong>}}></Trans> 
    },
]