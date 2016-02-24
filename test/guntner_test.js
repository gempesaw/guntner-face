/*global faceGuntner */

describe('guntner face', function () {

    var facedGuntner;
    beforeEach(function () {
        var img = new window.Image();
        var body = document.getElementsByTagName('body')[0];
        body.appendChild(img);

        facedGuntner = false;
        window.chrome = {
            extension: {
                getURL: function () {
                    facedGuntner = true;
                }
            }
        };
    });

    it('should show guntner face', () => {
        window.Math.random = function () { return 1; };
        faceGuntner();

        expect(facedGuntner).toBe(true);
    });

    it('should not show guntner face sometimes :(', () => {
        window.Math.random = function () { return 0; };
        faceGuntner();

        expect(facedGuntner).toBe(false);
    });

});
