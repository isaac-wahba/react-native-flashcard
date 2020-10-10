import { Notifications } from "expo";
import  AsyncStorage  from "@react-native-community/async-storage";
import * as Permissions from "expo-permissions";

const key_of_notifications = "flashcards:notifications";

export function clearNotification() {
  return AsyncStorage.removeItem(key_of_notifications).then(
    Notifications.cancelAllScheduledNotificationsAsync
  );
}

export function setNotification() {
  AsyncStorage.getItem(key_of_notifications)
    .then(JSON.parse)
    .then((data) => {
      if (data === null) {
        Permissions.askAsync(Permissions.NOTIFICATIONS).then(({ status }) => {
          if (status === "granted") {
            Notifications.cancelAllScheduledNotificationsAsync();

            let nextDay = new Date();
            nextDay.setDate(nextDay.getDate() + 1);
            nextDay.setHours(19);
            nextDay.setMinutes(30);

            Notifications.scheduleLocalNotificationAsync(createNotification(), {
              time: nextDay,
              repeat: "day",
            });
            AsyncStorage.setItem(key_of_notifications, JSON.stringify(true));
          }
        });
      }
    });
}
function createNotification() {
  return {
    title: "Practice!",
    body: "👋 Don't forget to solve the quiz for today!",
    ios: {
      sound: true,
    },
    android: {
      sound: true,
      priority: "high",
      sticky: false,
      vibrate: false,
    },
  };
}
