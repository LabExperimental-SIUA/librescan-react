export default () => {
    const params = (new URL(document.location)).searchParams;
    return (params.get('locales') || 'memory').toLowerCase();
}