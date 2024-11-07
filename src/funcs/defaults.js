const path = require("path");
const {app} = require("electron");

function getDefaultSettings() {
    return {
        autoUpdate: true,
        firstTime: true,
        theme: 'auto',
        downloadsDatabasePath: path.join(app.getPath('home'), 'MH', 'database.db'),
        downloadLocation: app.getPath('downloads'),
        createPlatformSubfolders: false,
        orpheusDL: false,
        streamrip: true,
        use_cookies: false,
        cookies: "",
        cookies_from_browser: "",
        override_download_extension: false,
        yt_override_download_extension: false,
        ytm_override_download_extension: false,
        youtubeVideoExtensions: "mp4",
        youtubeAudioExtensions: "mp3",
        use_aria2: false,
        auto_update: true,
        max_downloads: 0,
        download_speed_limit: false,
        speed_limit_type: 'M',
        speed_limit_value: 0,
        max_retries: 5,
        download_output_template: "%(title)s.%(ext)s",
        continue: true,
        add_metadata: false,
        embed_chapters: false,
        add_subtitle_to_file: false,
        use_proxy: false,
        proxy_url: "",
        use_authentication: false,
        username: "",
        password: "",
        sponsorblock_mark: "all",
        sponsorblock_remove: "",
        sponsorblock_chapter_title: "[SponsorBlock]: %(category_names)l",
        no_sponsorblock: false,
        sponsorblock_api_url: "https://sponsor.ajay.app",

        // Streamrip settings
        disc_subdirectories: true,
        concurrency: true,
        max_connections: 6,
        requests_per_minute: 60,
        // Qobuz
        qobuz_quality: 3,
        qobuz_download_booklets: true,
        qobuz_token_or_email: false,
        qobuz_email_or_userid: "",
        qobuz_password_or_token: "",
        qobuz_app_id: "",
        qobuz_secrets: "",
        // Tidal
        tidal_download_videos: false,
        tidal_quality: '3',
        tidal_user_id: '',
        tidal_country_code:"",
        tidal_access_token:"",
        tidal_refresh_token: "",
        tidal_token_expiry: "",
        // Deezer
        deezer_quality: 1,
        deezer_use_deezloader: true,
        deezer_arl: "",
        deezloader_warnings: true,

        downloads_database_check: false,
        downloads_database: "/path/to/downloads/downloads.db.db",
        failed_downloads_database_check: false,
        failed_downloads_database: "/path/to/failed/downloads/failed_downloads.db",
        conversion_check: false,
        conversion_codec: "MP3",
        conversion_sampling_rate: 44100,
        conversion_bit_depth: 16,
        conversion_lossy_bitrate: 320,
        meta_album_name_playlist_check: false,
        meta_album_order_playlist_check: false,
        meta_exclude_tags_check: false,
        excluded_tags: "",

        // Spotify Settings
        spotify_cookies_path: "",
        spotify_wvd_path: "",
        spotify_output_path: "Spotify",
        spotify_temp_path: "temp",
        spotify_enable_videos: false,
        spotify_download_music_videos: false,
        spotify_download_podcast_videos: false,
        spotify_force_premium: false,
        spotify_download_premium_videos: false,
        spotify_download_mode: "ytdlp",
        spotify_video_format: "mp4",
        spotify_remux_mode_video: "ffmpeg",
        spotify_template_folder_album: "{album_artist}/{album}",
        spotify_template_folder_compilation: "Compilations/{album}",
        spotify_template_file_single_disc: "{track:02d} {title}",
        spotify_template_file_multi_disc: "{disc}-{track:02d} {title}",
        // Apple Settings
        apple_cookies_path: "",
        apple_output_path: "Apple Music",
        apple_temp_path: "temp",
        apple_download_mode: "ytdlp",
        apple_remux_mode: "ffmpeg",
        apple_cover_format: "jpg",
        apple_synced_lyrics_format: "lrc",
        apple_template_folder_album: "{album_artist}/{album}",
        apple_template_folder_compilation: "Compilations/{album}",
        apple_template_file_single_disc: "{track:02d} {title}",
        apple_template_file_multi_disc: "{disc}-{track:02d} {title}",
        spotify_wait_interval: 5,
        spotify_no_exceptions: true,
        spotify_save_cover: true,
        spotify_save_playlist: true,
        spotify_overwrite: true,
        spotify_lrc_only: true,
        spotify_no_lrc: false,
        apple_disable_music_video_skip: true,
        apple_save_cover: true,
        apple_overwrite: true,
        apple_save_playlist: true,
        apple_synced_lyrics_only: true,
        apple_no_synced_lyrics: false,
        apple_cover_size: 1200,
    };
}

module.exports = { getDefaultSettings };