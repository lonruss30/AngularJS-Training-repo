var app = angular.module('usersApp');

app.controller('createCtrl', function ($scope, $location,services) {
    services.getUsertypes().then(function (result) {
        $scope.usertypes = result;
        console.log(result);
    });

    $scope.create = function () {
        var data = {
            "username": $scope.user.Username,
            "password": $scope.user.Password,
            "firstname": $scope.user.Firstname,
            "email": $scope.user.Email,
            "lastname": $scope.user.Lastname,
            "contactnumber": $scope.user.ContactNumber,
            "usertypeid": $scope.user.UsertypeId

        };

        services.createUser(data).then(function (result) {
            if (result.status == 400) {
                swal(result.data.Message, "", "error");
            } else if (result.status == 500) {
                swal("Internal Server Error", "", "error");
            } else if (result.status == 200) {
                swal("Success", "", "success");
                $location.path("/list")
            }
        });
    }
});