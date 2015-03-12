/*
 *
 * Licensed to the Apache Software Foundation (ASF) under one
 * or more contributor license agreements.  See the NOTICE file
 * distributed with this work for additional information
 * regarding copyright ownership.  The ASF licenses this file
 * to you under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance
 * with the License.  You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 *
*/

var DownloadOperation = require('./DownloadOperation');

/**
 * Initializes a new instance of BackgroundDownloader object.
 * Used to configure downloads prior to the actual creation of the download operation using CreateDownload.
 */
var BackgroundDownloader = function() {

};

/**
 * Initializes a DownloadOperation object that contains the specified Uri and the file that the response is written to.
 *
 * @param {string} uri The location of the resource.
 * @param {File} resultFile The file that the response will be written to.
 * @param {string} title The title of this download, to be displayed in notifications (if enabled).
 * @param {string} description The description of this download, to be displayed in notifications (if enabled).
 * @param {int} notificationVisibility Control whether a system notification is posted by the download manager while this download is running or when it is completed.
 */
BackgroundDownloader.prototype.createDownload = function(uri, resultFile, title, description, notificationVisibility) {
    title = title || "org.apache.cordova.backgroundDownload plugin";
	description = description || "";
	notificationVisibility= notificationVisibility || 0;
	return new DownloadOperation(uri, resultFile, title, description, notificationVisibility);
};

/**
 * Control whether a system notification is posted by the download manager while this download is running or when it is completed.
 *
 * VISIBILITY_VISIBLE: This download is visible but only shows in the notifications while it's in progress.
 * VISIBILITY_VISIBLE_NOTIFY_COMPLETED: This download is visible and shows in the notifications while in progress and after completion.
 * VISIBILITY_HIDDEN: This download doesn't show in the UI or in the notifications.
 * VISIBILITY_VISIBLE_NOTIFY_ONLY_COMPLETION: This download shows in the notifications after completion ONLY. 
 */
BackgroundDownloader.prototype.NotificationVisibility = { 
		VISIBILITY_VISIBLE: 0,
		VISIBILITY_VISIBLE_NOTIFY_COMPLETED: 1,
		VISIBILITY_HIDDEN: 2,
		VISIBILITY_VISIBLE_NOTIFY_ONLY_COMPLETION: 3
};

module.exports = BackgroundDownloader;