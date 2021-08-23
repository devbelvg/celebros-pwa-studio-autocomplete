import { gql } from '@apollo/client';

export const GET_AC_CONFIG = gql`
    query storeConfigData {
        storeConfig {
            celebros_ac_customer_name
            celebros_ac_frontend_address
            celebros_ac_scriptserver_address
        }
    }
`;

export default {
    getAcConfigQuery: GET_AC_CONFIG
};
