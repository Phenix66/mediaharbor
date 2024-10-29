// preload.js
const { contextBridge, ipcRenderer } = require('electron');

// Combine all electronAPI methods into a single object
contextBridge.exposeInMainWorld('electronAPI', {
    // Download-related methods
    getDownloads: () => ipcRenderer.invoke('load-downloads'),

    // Existing channel handlers
    send: (channel, data) => {
        const validChannels = [
            'start-yt-music-download',
            'start-yt-video-download',
            'start-generic-video-download',
            'minimize-window',
            'maximize-window',
            'close-window',
            'start-streamrip',
            'start-download',
            'start-qobuz-download',
            'start-deezer-download',
            'start-tidal-download',
            'save-settings',
            'load-settings',
            'get-default-settings',
            'download-complete',
            'download-error',
            'start-qobuz-batch-download',
            'start-tidal-batch-download',
            'start-deezer-batch-download',
            'start-apple-download',
            'start-spotify-download'
        ];
        if (validChannels.includes(channel)) {
            ipcRenderer.send(channel, data);
        }
    },

    receive: (channel, func) => {
        ipcRenderer.on(channel, (event, ...args) => func(...args));
    },

    deleteDownload: (id) => ipcRenderer.invoke('deleteDownload', id),
    showItemInFolder: (location) => ipcRenderer.invoke('showItemInFolder', location),
    clearDownloadsDatabase: () => ipcRenderer.invoke('clearDownloadsDatabase'),
    fileLocation: () => ipcRenderer.invoke('dialog:saveFile'),
    folderLocation: () => ipcRenderer.invoke('dialog:openFolder'),
    fileSelectLocation: () => ipcRenderer.invoke('dialog:openFile'),
    openWvdLocation: () => ipcRenderer.invoke('dialog:openwvdFile'),
});
contextBridge.exposeInMainWorld(
    'api', {
        // Search methods
        performSearch: (searchData) => {
            return ipcRenderer.invoke('perform-search', searchData);
        },

        // Listen to events
        onSearchResults: (callback) => {
            ipcRenderer.on('search-results', (event, ...args) => callback(...args));
        },

        playMedia: (args) => {
            // Return the promise directly
            return ipcRenderer.invoke('play-media', args);
        },

        onStreamReady: (callback) => {
            ipcRenderer.removeAllListeners('stream-ready');
            ipcRenderer.on('stream-ready', (event, data) => callback(data));
        },

        onError: (callback) => {
            ipcRenderer.on('error', (event, ...args) => callback(...args));
        }
    }
);