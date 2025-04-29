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

export {languageLookup}