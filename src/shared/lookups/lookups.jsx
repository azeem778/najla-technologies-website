import { Space, Image, Typography} from "antd"
const {Text}= Typography

    const languageLookup=[
        {
            id:'en', 
            name:<Space className='w-100'>
                    <Image src='/assets/images/english.png' width={'25px'} alt='najla' preview={false}/>
                    <Text className='fs-12'>English</Text>
                </Space>
        },
        {
            id:'ar', 
            name:<Space className='w-100'>
                <Image src='/assets/images/arabic.png' width={'25px'} alt='najla' preview={false}/>
                <Text className='fs-12'>Arabic</Text>
                </Space>
        },
    ] 

    const servcies = [
        {
            id: 1,
            name: 'Web Development'
        },
        {
            id: 2,
            name: 'Mobile App Development'
        },
        {
            id: 3,
            name: 'IT Consultation'
        },
        {
            id: 4,
            name: 'Technical Support'
        },
        {
            id: 5,
            name: 'Other'
        },
    ]

    const existingweb = [
        {
            id: 1,
            name: 'Yes'
        },
        {
            id: 2, 
            name: 'No'
        }
    ]

    const methodCom = [
        {
            id: 1,
            name:'Phone Call'
        },
        {
            id: 2,
            name:'WhatsApp'
        },
        {
            id: 3,
            name:'Email'
        },
        {
            id: 4,
            name:'In-person Meeting'
        },
    ]

export {languageLookup,servcies,existingweb,methodCom}