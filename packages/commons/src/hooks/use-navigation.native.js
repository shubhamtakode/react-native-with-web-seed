import React, { useContext } from 'react';
import { NavigationContext } from 'react-navigation'
const isQueryParam = new RegExp('^qp_generic_mpra_')

const filterParams = (params = {}, removeQueryParams = false) => {
    return Object.keys(params).reduce((acc, key) => {
        if (removeQueryParams) {
            if (isQueryParam.test(key)) return acc;
            acc[key] = params[key];
        } else {
            if (!isQueryParam.test(key)) return acc;
            acc[key.replace(isQueryParam, '')] = params[key];
        }
        return acc;
    }, {});
}
const getStateAndParams = (data) => ({
    pathname: data.routeName,
    params: filterParams(data.params, true),
    search: filterParams(data.params),
    state: {}
});

export const useNavigation = () => {
    const { navigate, goBack, getParam, state } = useContext(NavigationContext);

    const navigateTo = (url, params = {}, queryParams = null) => {
        params = {
            ...(params && { ...params }),
            ...(Object.keys(queryParams || {}).reduce((acc, eParam) => {
                return {
                    ...acc, [`qp_generic_mpra_${eParam}`]: queryParams[eParam]
                }
            }, {}))
        }

        navigate({
            routeName: url,
            params
        });

    };

    const navigateBack = () => {
        goBack();
    };

    return {
        navigateTo,
        navigateBack,
        getState: filterParams(state.params, true),
        getStateByKey: (key) => getParam(key),
        routeDetails: getStateAndParams(state),
        isWeb: false,
        getRouteParam: (key) => getParam(key),
        getRouteParams: filterParams(state.params, true),
        getQueryParam: (key) => getParam(`qp_generic_mpra_${key}`),
        getQueryParams: filterParams(state.params)

    }
};
