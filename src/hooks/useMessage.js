import { useToast } from '@chakra-ui/react';
import React from 'react';
import { useCallback } from 'react';

const useMessage = () => {
    const toast = useToast();

    const showToast = (status, title, options = {}) => {
        toast({
            title,
            status,
            isClosable: true,
            position: 'top',
            duration: 1500,
            ...options,
        })
    }

    const showSuccess = useCallback((title, options = {}) => showToast('success', title, options), [])

    const showError = useCallback((title, options = {}) => showToast('error', title, options), [])

    const showInfo = useCallback((title, options = {}) => showToast('info', title, options), [])

    return { toast, showSuccess, showError, showInfo };
};

export default useMessage;