describe('gameFitController ', function() {
	beforeEach(angular.mock.module('gamefit'));

	// var $controller;
	var user;
	beforeEach(inject(function(_userStats_){//(_$controller_){
		userStats = _userStats_;
	// }));
	// beforeEach(function(){
		// $controller = _$controller_; // controller should be name of controller
		user = [
			{ 
				"id": 1,
				"first": "Daniel Cantwell", 
				"last": "Endurance",
				 "Age": 21,
				 "Weight": 180, 
				 "mood": "Chill",
				 "activity":[
				 	{
				 		"runId": 1,
				 		"date": "11/27/14",
				 		"runDistance": 5,
				 		"runTime": 40
				 	},
				 	{
				 		"runId": 2,
				 		"date": "11/28/14",
				 		"runDistance": 5,
				 		"runTime": 41
				 	},
				 	{
				 		"runId": 3,
				 		"date": "11/29/14",
				 		"runDistance": 5,
				 		"runTime": 42
				 	}
				 ] 
			},
			{ 
				"id": 2,
				"first": "Daniel Silva", 
				"last": "Consistency",
				 "Age": 21,
				 "Weight": 300,
				 "mood": "Christmas", 
				 "activity":[
				 	{
				 		"runId": 1,
				 		"date": "11/31/14",
				 		"runDistance": 1,
				 		"runTime": 10
				 	},
				 	{
				 		"runId": 2,
				 		"date": "12/1/14",
				 		"runDistance": 1,
				 		"runTime": 10
				 	},
				 	{
				 		"runId": 1,
				 		"date": "12/2/14",
				 		"runDistance": 1,
				 		"runTime": 9
				 	}
				 ] 
			}
		];
	}));
	// Consistency Test
	describe('userStat.getConsistency()', function() {
		it('getConsistency should return a score from 0 for Cantwell',(function() {
			var consistency;
			consistency = userStats.getConsistency(user[0]);			
			expect(consistency).toEqual(0);
		}));
		it('getConsistency should return a score from 200 for Silva',(function() {
			var consistency;
			consistency = userStats.getConsistency(user[1]);
			expect(consistency).toEqual(200);
		}));
	});
	//Burst Test
	describe('userStat.getBurst()', function() {
		it('getBurst should return a score from 0 for Cantwell',(function() {
			var burst;
			burst = userStats.getBurst(user[0]);
			expect(burst).toEqual(0);
		}));
		it('getBurst should return a score from 90 for Silva',(function() {
			var burst;
			burst = userStats.getBurst(user[1]);
			expect(burst).toEqual(90);
		}));
	});
	//Endurance Test
	describe('userStat.getEndurance()', function() {
		it('getEndurance should return a score from 120 for Cantwell',(function() {
			var endurance;
			endurance = userStats.getEndurance(user[0]);
			expect(endurance).toEqual(120);
		}));
		it('getEndurance should return a score from 84 for Silva',(function() {
			var endurance;
			endurance = userStats.getEndurance(user[1]);
			expect(endurance).toEqual(84);
		}));
	});
	// FitPoints test
	describe('userStat.getPoints()', function() {
		it('getPoints should return a score from 120/400 for Cantwell',(function() {
			var points;
			points = userStats.getPoints(user[0]);
			expect(points).toEqual(120);
		}));
		it('getPoints should return a score from 374 for Silva',(function() {
			var points;
			points = userStats.getPoints(user[1]);
			expect(points).toEqual(374);
		}));
	});
	// FitScore test
	describe('userStat.getScore()', function() {
		it('getScore should return a score from 30% for Cantwell',(function() {
			var score;
			score = userStats.getScore(user[0]);
			expect(score).toEqual(30);
		}));
		it('getScore should return a score from 94% for Silva',(function() {
			var score;
			score = userStats.getScore(user[1]);
			expect(score).toEqual(94);
		}));
	});
});
// 			$scope.consistency = userStats.getConsistency($scope.currUser);
// 			$scope.burst = userStats.getBurst($scope.currUser);
// 			$scope.endurance = userStats.getEndurance($scope.currUser);
// 			$scope.fitPoints = userStats.getPoints($scope.currUser);
// 			$scope.fitScore = userStats.getScore($scope.currUser);