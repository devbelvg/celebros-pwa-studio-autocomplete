import React, { useEffect } from 'react';
import { bool, func, shape, string } from 'prop-types';
import { useIntl } from 'react-intl';
import { Helmet } from 'react-helmet-async';

import defaultClasses from './autoComplete.css';
import { useStyle } from '@magento/venia-ui/lib/classify';

import { useAutoComplete } from '../../talons/SearchBar/useAutoComplete';

const Autocomplete = props => {
    const { setVisible, valid, visible } = props;

    const classes = useStyle(defaultClasses, props.classes);
    const rootClassName = classes.root;

    const talonProps = useAutoComplete();
    const { customerName, frontendAddress, scriptserverAddress } = talonProps;

    const loadScript = url => {
        //useEffect(() => {
            const script = document.createElement('script');

            script.src = url;
            script.async = false;
            script.addEventListener("load", function(event) {
                console.log("script "+url+"is loaded");
            });
            
            document.body.appendChild(script);

            return () => {
                document.body.removeChild(script);
            }
        //}, [url]);
    };
    
    const loadCss = url => {
        const link = document.createElement('link');
        link.rel  = 'stylesheet';
        link.type = 'text/css';
        link.href = url;
        link.media = 'all';
        document.getElementsByTagName( "head" )[0].appendChild(link);
    };
    
    const initAngular = props => {
        const { customerName, frontendAddress, scriptserverAddress } = props;
        loadScript("https://ajax.googleapis.com/ajax/libs/angularjs/1.6.3/angular.min.js");
        loadScript("https://ajax.googleapis.com/ajax/libs/angularjs/1.6.2/angular-route.min.js");
        loadScript("https://" + scriptserverAddress + "/AutoCompleteV6/Clients/" + customerName + "/output/CelScriptsAC.js");
        loadCss("https://" + scriptserverAddress + "/AutoCompleteV6/Clients/" + customerName + "/output/CelStylesAC.css");
    };

        //loadScript("https://ajax.googleapis.com/ajax/libs/angularjs/1.6.3/angular.min.js");
        //loadScript("https://ajax.googleapis.com/ajax/libs/angularjs/1.6.2/angular-route.min.js");
        //loadScript("https://uistaging.celebros.com/AutoCompleteV6/Clients/magedemo/output/CelScriptsAC.js");

    if (customerName && frontendAddress && scriptserverAddress) {
        let params = {
            customerName: customerName,
            frontendAddress: frontendAddress,
            scriptserverAddress: scriptserverAddress    
        };
        initAngular(params);
    }

    return (
        <div id="searchSuggestions" className={rootClassName}>
            <div className="ng-scope" ng-view=""></div>
        </div>
    );
};

export default Autocomplete;

Autocomplete.propTypes = {
    classes: shape({
        message: string,
        root_hidden: string,
        root_visible: string,
        suggestions: string
    }),
    setVisible: func,
    visible: bool
};
