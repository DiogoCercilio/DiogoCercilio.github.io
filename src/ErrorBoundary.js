import React from 'react';

export default class ErrorBoundary extends React.Component {
    constructor(props) {
        super(props)
        this.state = { hasError: false }
        if (!this.props.fallback) throw 'Error Boundary fallback is required'
    }

    static getDerivedStateFromError = () => { 
        return { hasError: true }
    }
    render = () => {
        return !this.state.hasError ? this.props.children : this.props.fallback
    }
}