import React from 'react';

const Question = (props) => {
    return (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" {...props} xmlns="http://www.w3.org/2000/svg">
            <circle opacity="0.7" cx="12" cy="12" r="12" fill="#EBEAF0" />
            <path opacity="0.6" d="M12.1921 6.71997C13.2801 6.71997 14.1495 7.01864 14.8001 7.61597C15.4615 8.2133 15.7921 9.0293 15.7921 10.064C15.7921 11.1413 15.4508 11.952 14.7681 12.496C14.0855 13.04 13.1788 13.312 12.0481 13.312L11.9841 14.576H10.4001L10.3201 12.064H10.8481C11.8828 12.064 12.6721 11.9253 13.2161 11.648C13.7708 11.3706 14.0481 10.8426 14.0481 10.064C14.0481 9.49864 13.8828 9.05597 13.5521 8.73597C13.2321 8.41597 12.7841 8.25597 12.2081 8.25597C11.6321 8.25597 11.1788 8.41064 10.8481 8.71997C10.5175 9.0293 10.3521 9.4613 10.3521 10.016H8.64014C8.64014 9.37597 8.78414 8.8053 9.07214 8.30397C9.36014 7.80264 9.7708 7.4133 10.3041 7.13597C10.8481 6.85864 11.4775 6.71997 12.1921 6.71997ZM11.1681 18.112C10.8375 18.112 10.5601 18 10.3361 17.776C10.1121 17.552 10.0001 17.2746 10.0001 16.944C10.0001 16.6133 10.1121 16.336 10.3361 16.112C10.5601 15.888 10.8375 15.776 11.1681 15.776C11.4881 15.776 11.7601 15.888 11.9841 16.112C12.2081 16.336 12.3201 16.6133 12.3201 16.944C12.3201 17.2746 12.2081 17.552 11.9841 17.776C11.7601 18 11.4881 18.112 11.1681 18.112Z" fill="#273D4B" />
        </svg>
    );
};

export default Question;