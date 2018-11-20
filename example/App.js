import Home from './Home'
import DefaultScroll from "./default-scroll";
import DefaultHTML from "./default-html";
import BrightCoveScroll from "./brightcove-scroll";
import BrightCoveHTML from "./brightcove-html";
import {
    createStackNavigator,
    createAppContainer
} from 'react-navigation';

const MainNavigator = createStackNavigator({
    Home: {screen: Home},
    DefaultScroll: {screen: DefaultScroll},
    DefaultHTML:{screen: DefaultHTML},
    BrightCoveHTML:{screen: BrightCoveHTML},
    BrightCoveScroll:{screen:BrightCoveScroll}
});

const App = createAppContainer(MainNavigator);

export default App;


