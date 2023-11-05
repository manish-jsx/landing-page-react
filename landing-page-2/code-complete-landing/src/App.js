import './App.css';
import React from 'react';




import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import AdminLogin from './AdminLogin';
import AdminPanel from './AdminPanel';  // Import the AdminPanel component

function App() {
    return (
        <Router>
            <Switch>
                <Route path="/admin-login" component={AdminLogin} />
                <Route path="/admin-panel" component={AdminPanel} />
                {/* Your existing routes */}
            </Switch>
        </Router>
    );
}

export default App;













