basic.showIcon(IconNames.Happy)
if (tabbyRobot.tracking(tabbyRobot.TrackingState.LR_line)) {
    tabbyRobot.motorRun(30, 30)
} else if (tabbyRobot.tracking(tabbyRobot.TrackingState.R_line)) {
    tabbyRobot.motorRun(-30, 50)
} else if (tabbyRobot.tracking(tabbyRobot.TrackingState.L_line)) {
    tabbyRobot.motorRun(50, -30)
} else if (tabbyRobot.tracking(tabbyRobot.TrackingState.LR_unlin)) {
    tabbyRobot.motorRun(0, 0)
}
