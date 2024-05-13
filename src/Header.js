
import './GST.css';

const Header = ({fontSize, setFontSize, highContrast, setHighContrast }) => {
    

    const increaseFontSize = () => setFontSize(currentSize => currentSize + 1);
    const decreaseFontSize = () => setFontSize(currentSize => currentSize - 1);
    const toggleContrast = () => setHighContrast(current => !current);

    const handleSkip = (e) => {
        e.preventDefault();
        const mainContent = document.getElementById('main-content');
        if (mainContent) {
            mainContent.focus(); // Set focus if focusable
        }
    };

    const handleKeyPress = (event, action) => {
        if (event.key === 'Enter' || event.key === ' ') {
            event.preventDefault(); // Prevent the default action to stop scrolling when space is pressed
            action();
        }
    };

    return (
        <div className="accessibility-options">
            <ul style={{ fontSize: `${fontSize}px`, backgroundColor: highContrast ? 'gray' : 'rgb(5, 21, 71)', color: highContrast ? 'white' : 'white', listStyleType: "none", margin:"5px 0px", padding:"5px", marginBottom:"0px"}} className='ul'>
                <li role="button" tabIndex="0" onClick={handleSkip} onKeyDown={(e) => handleKeyPress(e, handleSkip)} style={{ cursor: 'pointer',  marginRight:"10px" }}>Skip to Main Content</li>
                <li role="button" tabIndex="0" onClick={toggleContrast} onKeyDown={(e) => handleKeyPress(e, toggleContrast)} style={{ cursor: 'pointer',  marginRight:"10px" }}><i className="fa fa-adjust" aria-hidden="true"></i></li>
                <li role="button" tabIndex="0" onClick={increaseFontSize} onKeyDown={(e) => handleKeyPress(e, increaseFontSize)} style={{ cursor: 'pointer',  marginRight:"10px", marginTop:"0px" }}>A<sup>+</sup></li>
                <li role="button" tabIndex="0" onClick={decreaseFontSize} onKeyDown={(e) => handleKeyPress(e, decreaseFontSize)} style={{ cursor: 'pointer',  marginRight:"133px" ,marginTop:"0px" }}>A<sup>-</sup></li>
            </ul>
        </div>
    );
}

export default Header;
