import React from 'react';
import { func } from 'prop-types';
import { Search as SearchIcon, X as ClearIcon, ArrowRight as SendIcon } from 'react-feather';
import { useSearchField } from '@magento/peregrine/lib/talons/SearchBar';

import Icon from '@magento/venia-ui/lib/components/Icon';
import TextInput from '@magento/venia-ui/lib/components/TextInput';
import Trigger from '@magento/venia-ui/lib/components/Trigger';

const sendIcon = <Icon src={SendIcon} size={24} />;
const searchIcon = <Icon src={SearchIcon} size={24} />;

const SearchField = props => {
    const { isSearchOpen, onSubmit } = props;
    const { inputRef, resetForm, value } = useSearchField({ isSearchOpen });

    const searchButton = value ? (
        <Trigger action={onSubmit}>{sendIcon}</Trigger>
    ) : null;

    return (
        <TextInput
            id="search"
            after={searchButton}
            before={searchIcon}
            field="search_query"
            onSubmit={onSubmit}
            forwardedRef={inputRef}
        />
    );
};

export default SearchField;

SearchField.propTypes = {
    onSubmit: func
};
