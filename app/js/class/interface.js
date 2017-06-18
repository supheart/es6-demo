import $ from 'jquery';

class Interface{
    getOmit(issue) {
        let self = this;
        return new Promise((resolve, reject) => {
            $.ajax({
                url: '/get/omit',
                data: {
                    issue: issue
                },
                dataType: 'json',
                success: (res) => {
                    self.setOmit(res.data);
                    resolve.call(self, res);
                },
                error: (err) => {
                    reject.call(err);
                }
            });
        });
    }

    getOpenCode(issue) {
        let self = this;
        return new Promise((resolve, reject) => {
            $.ajax({
                url: '/get/omit',
                data: {
                    issue: issue
                },
                dataType: 'json',
                success: (res) => {
                    self.setOpenCode(res.data);
                    resolve.call(self, res);
                },
                error: (err) => {
                    reject.call(err);
                }
            });
        });
    }

    getState(issue) {
         return new Promise((resolve, reject) => {
            $.ajax({
                url: '/get/sate',
                data: {
                    issue: issue
                },
                dataType: 'json',
                success: (res) => {   
                    resolve.call(self, res);
                },
                error: (err) => {
                    reject.call(err);
                }
            });
        });
    }
}

export default Interface;