/*global faceGuntner, chooseGuntner */

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

    it('should show guntner face', function () {
        window.Math.random = function () { return 1; };
        faceGuntner();

        expect(facedGuntner).toBe(true);
    });

    it('should not show guntner face sometimes :(', function () {
        window.Math.random = function () { return 0; };
        faceGuntner();

        expect(facedGuntner).toBe(false);
    });

    it('should choose the right guntner', function () {
        var guntner = chooseGuntner();
        expect(guntner).toMatch(/images\/guntner\d\.(?:jpg|png)/);
    });

});
