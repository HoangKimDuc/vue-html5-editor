import lrz from 'lrz'
import template from './dashboard.html'
import Command from '../../range/command'
/**
 * Created by peak on 2017/2/10.
 */
export default {
    template,
    data() {
        return {
            videoUrl: '',
            upload: {
                status: 'ready', // progress,success,error,abort
                errorMsg: null,
                progressComputable: false,
                complete: 0
            }
        }
    },
    methods: {
        reset() {
            this.upload.status = 'ready'
        },
        insertVideoUrl() {
            if (!this.videoUrl) {
                return
            }
            // format iframe video Youtube
            //url https://www.youtube.com/watch?v=zZjGBB5X3Z4
            //iframe <iframe width="560" height="315" src="https://www.youtube.com/embed/zZjGBB5X3Z4" frameborder="0" allowfullscreen></iframe>
            var idvideo = (this.videoUrl.split("v="))[1]
            var html = `<iframe width="560" height="315" style="margin:0 auto;display:block;" src="https://www.youtube.com/embed/${idvideo}" frameborder="0" allowfullscreen></iframe>`
            this.$parent.execCommand(Command.INSERT_VIDEO, html)
            this.videoUrl = null
        },
       
        setUploadError(msg) {
            this.upload.status = 'error'
            this.upload.errorMsg = msg
        },
    }
}
