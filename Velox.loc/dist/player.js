var tag = document.createElement('script');

        tag.src = "https://www.youtube.com/iframe_api";
        var firstScriptTag = document.getElementsByTagName('script')[0];
        firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

        // 3. This function creates an <iframe> (and YouTube player)
        //    after the API code downloads.
        var player;

        function onYouTubeIframeAPIReady() {
            player = new YT.Player('player', {
                height: '360',
                width: '640',
                videoId: 'M7lc1UVf-VE',
                events: {
                    'onReady': onPlayerReady,
                    'onStateChange': onPlayerStateChange
                },
                playerVars: {
                    controls: 0,
                    showinfo: 0,
                    modestbranding: 0,
                    fs: 1
                }
            });
        }

        // 4. The API will call this function when the video player is ready.
        function onPlayerReady(event) {
            // event.target.playVideo();
            changeStatus("Pause");
        }

        // 5. The API calls this function when the player's state changes.
        //    The function indicates that when playing a video (state=1),
        //    the player should play for six seconds and then stop.

        function onPlayerStateChange(event) {
            if (player.getPlayerState() == 5) {
            changeStatus("Pause");
            }
            if (player.getPlayerState() == 1) {
            changeStatus("Playing");
            }
            if (player.getPlayerState() == 2) {
            changeStatus("Pause");
            }
        }
        function changeStatus(text) {
            document.getElementById('status').innerText = text;

        }
        function stopVideo() {
            player.stopVideo();
        }

        var btn_stop = document.getElementById('btn--stop');
        btn_stop.addEventListener('click', stopVideo);

        function playVideo() {
            player.playVideo();
        }
       

        var btn_play = document.getElementById('btn--play');
        btn_play.addEventListener('click', playVideo);

        
        
        
        function pauseVideo() {
            player.pauseVideo();
        }
        var btn_pause = document.getElementById('btn--pause');
        btn_pause.addEventListener('click', pauseVideo);
            var status = document.getElementById('status');
                    // function status-check(){
                    //     if (player.getPlayerState() == 2){
                    //         btn_pause.addEventListener('click', playVideo);
                            
                    //     }
                    // }
                    if (player.getPlayerState() == 2){
                            btn_pause.addEventListener('click', playVideo);
                            
                         }
                    
                        