import { useQuery } from '@apollo/client';
import mergeOperations from '@magento/peregrine/lib/util/shallowMerge';
import DEFAULT_OPERATIONS from './autoComplete.gql';

export const useAutoComplete = (props = {}) => {
    const operations = mergeOperations(DEFAULT_OPERATIONS, props.operations);
    const { getAcConfigQuery } = operations;
    const { data } = useQuery(getAcConfigQuery);

    return {
        customerName: data && data.storeConfig && data.storeConfig.celebros_ac_customer_name,
        frontendAddress: data && data.storeConfig && data.storeConfig.celebros_ac_frontend_address,
        scriptserverAddress: data && data.storeConfig && data.storeConfig.celebros_ac_scriptserver_address,
    };
};
