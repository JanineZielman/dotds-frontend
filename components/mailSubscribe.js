import MailchimpSubscribe from 'react-mailchimp-subscribe';
import MailForm from './mailForm.js';

const MailSubscribe = () => {

  const MAILCHIMP_URL = "https://gmail.us17.list-manage.com/subscribe/post?u=dd1ef024e5705adde078bb85a&amp;id=be7556db5c&amp;f_id=00b8e8e3f0";

  function closePopup(){
    document.getElementById('popup').style.display = 'none';
  }
  return (
    <div className='mail-subscribe' id="popup">
      <div className='close' onClick={closePopup}>x</div>
      <MailchimpSubscribe
        url={ MAILCHIMP_URL }
        render={ ( props ) => {
          const { subscribe, status, message } = props || {};
          return (
            <MailForm
              status={ status }
              message={ message }
              onValidated={ formData => subscribe( formData ) }
            />
          );
        } }
      />
    </div>
  );
};

export default MailSubscribe;