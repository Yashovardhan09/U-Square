import React, { useState } from 'react';
import backgroundImage from '../assets/bg.png';

const Salesforce = () => {
    const [isMarketingOpen, setIsMarketingOpen] = useState(false);
    const [isDataCloudOpen, setIsDataCloudOpen] = useState(false);

    const toggleMarketingDropdown = () => {
        setIsMarketingOpen(!isMarketingOpen);
    };

    const toggleDataCloudDropdown = () => {
        setIsDataCloudOpen(!isDataCloudOpen);
    };

    // Total number of days for Marketing Cloud
    const totalMarketingDays = 29;
    
    // Total number of days for Data Cloud
    const totalDataCloudDays = 43;

    return (
        <div 
            className="text-white p-6 mt-16 min-h-screen flex flex-col items-center justify-center"
            style={{
                backgroundImage: `url(${backgroundImage})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
            }}
        >
            {/* Marketing Cloud Schedule */}
            <button 
                onClick={toggleMarketingDropdown} 
                className={`p-3 rounded-lg cursor-pointer focus:outline-none mb-8 
                    ${isMarketingOpen ? 'bg-green-500 hover:bg-green-600' : 'bg-green-900 hover:bg-blue-600'}`}
            >
                {isMarketingOpen ? 'Hide Marketing Cloud Schedule' : 'View Marketing Cloud Schedule'}
            </button>

            {isMarketingOpen && (
                <div className="w-full max-w-4xl bg-black bg-opacity-70 p-6 rounded-lg mb-8">
                    <h2 className="text-2xl font-bold mb-4 text-center text-white">Marketing Cloud Training Schedule</h2>
                    <table className="table-auto w-full text-left bg-opacity-90 bg-black rounded-lg text-white">
                        <thead>
                            <tr>
                                <th className="px-4 py-2 border border-gray-700">S.No</th>
                                <th className="px-4 py-2 border border-gray-700">Days</th>
                                <th className="px-4 py-2 border border-gray-700">Topic</th>
                            </tr>
                        </thead>
                        <tbody>
                            {/* Marketing Cloud Schedule Rows */}
                            <tr>
                                <td className="px-4 py-2 border border-gray-700">1</td>
                                <td className="px-4 py-2 border border-gray-700">1</td>
                                <td className="px-4 py-2 border border-gray-700">Salesforce Marketing Cloud Overview</td>
                            </tr>
                            <tr>
                                <td className="px-4 py-2 border border-gray-700">2</td>
                                <td className="px-4 py-2 border border-gray-700">2</td>
                                <td className="px-4 py-2 border border-gray-700">Marketing Cloud Setup</td>
                            </tr>
                            <tr>
                                <td className="px-4 py-2 border border-gray-700">3</td>
                                <td className="px-4 py-2 border border-gray-700">2</td>
                                <td className="px-4 py-2 border border-gray-700">Email Studio Overview, Content</td>
                            </tr>
                            <tr>
                                <td className="px-4 py-2 border border-gray-700">4</td>
                                <td className="px-4 py-2 border border-gray-700">2</td>
                                <td className="px-4 py-2 border border-gray-700">Subscribers, Interactions</td>
                            </tr>
                            <tr>
                                <td className="px-4 py-2 border border-gray-700">5</td>
                                <td className="px-4 py-2 border border-gray-700">2</td>
                                <td className="px-4 py-2 border border-gray-700">A/B Testing, Tracking, Admin</td>
                            </tr>
                            <tr>
                                <td className="px-4 py-2 border border-gray-700">6</td>
                                <td className="px-4 py-2 border border-gray-700">2</td>
                                <td className="px-4 py-2 border border-gray-700">Mobile Studio</td>
                            </tr>
                            <tr>
                                <td className="px-4 py-2 border border-gray-700">7</td>
                                <td className="px-4 py-2 border border-gray-700">2</td>
                                <td className="px-4 py-2 border border-gray-700">Automation Studio</td>
                            </tr>
                            <tr>
                                <td className="px-4 py-2 border border-gray-700">8</td>
                                <td className="px-4 py-2 border border-gray-700">2</td>
                                <td className="px-4 py-2 border border-gray-700">Journey Builder</td>
                            </tr>
                            <tr>
                                <td className="px-4 py-2 border border-gray-700">9</td>
                                <td className="px-4 py-2 border border-gray-700">2</td>
                                <td className="px-4 py-2 border border-gray-700">Content Builder</td>
                            </tr>
                            <tr>
                                <td className="px-4 py-2 border border-gray-700">10</td>
                                <td className="px-4 py-2 border border-gray-700">2</td>
                                <td className="px-4 py-2 border border-gray-700">Analytics Builder</td>
                            </tr>
                            <tr>
                                <td className="px-4 py-2 border border-gray-700">11</td>
                                <td className="px-4 py-2 border border-gray-700">2</td>
                                <td className="px-4 py-2 border border-gray-700">Contact Builder</td>
                            </tr>
                            <tr>
                                <td className="px-4 py-2 border border-gray-700">12</td>
                                <td className="px-4 py-2 border border-gray-700">3</td>
                                <td className="px-4 py-2 border border-gray-700">Marketing Cloud Connect</td>
                            </tr>
                            <tr>
                                <td className="px-4 py-2 border border-gray-700">13</td>
                                <td className="px-4 py-2 border border-gray-700">1</td>
                                <td className="px-4 py-2 border border-gray-700">Marketing Cloud Recap</td>
                            </tr>
                            <tr>
                                <td className="px-4 py-2 border border-gray-700">14</td>
                                <td className="px-4 py-2 border border-gray-700">1</td>
                                <td className="px-4 py-2 border border-gray-700">Marketing Cloud Email Studio Recap</td>
                            </tr>
                            <tr>
                                <td className="px-4 py-2 border border-gray-700">15</td>
                                <td className="px-4 py-2 border border-gray-700">1</td>
                                <td className="px-4 py-2 border border-gray-700">Journey Builder Recap</td>
                            </tr>
                            <tr>
                                <td className="px-4 py-2 border border-gray-700">16</td>
                                <td className="px-4 py-2 border border-gray-700">1</td>
                                <td className="px-4 py-2 border border-gray-700">Marketing Cloud Cloud Connect Demo</td>
                            </tr>
                            <tr>
                                <td className="px-4 py-2 border border-gray-700">17</td>
                                <td className="px-4 py-2 border border-gray-700">1</td>
                                <td className="px-4 py-2 border border-gray-700">Marketing Cloud Use Cases</td>
                            </tr>
                            <tr>
                                <td className="px-4 py-2 font-bold border border-gray-700 text-center" colSpan="2">Total Days</td>
                                <td className="px-4 py-2 font-bold border border-gray-700">{totalMarketingDays}</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            )}

            {/* Data Cloud Schedule */}
            <button 
                onClick={toggleDataCloudDropdown} 
                className={`p-3 rounded-lg cursor-pointer mb-10 focus:outline-none 
                    ${isDataCloudOpen ? 'bg-green-500 hover:bg-green-600' : 'bg-blue-500 hover:bg-blue-600'}`}
            >
                {isDataCloudOpen ? 'Hide Data Cloud Schedule' : 'View Data Cloud Schedule'}
            </button>

            {isDataCloudOpen && (
                <div className="w-full max-w-4xl bg-black bg-opacity-70 p-6 rounded-lg">
                    <h2 className="text-2xl font-bold mb-4 text-center text-white">Data Cloud Training Schedule</h2>
                    <table className="table-auto w-full text-left bg-opacity-90 bg-black rounded-lg text-white">
                        <thead>
                            <tr>
                                <th className="px-4 py-2 border border-gray-700">Day</th>
                                <th className="px-4 py-2 border border-gray-700">Topic</th>
                            </tr>
                        </thead>
                        <tbody>
                            {/* Data Cloud Schedule Rows */}
                            <tr>
                                <td className="px-4 py-2 border border-gray-700">1</td>
                                <td className="px-4 py-2 border border-gray-700">Data Cloud Introduction & Terms Glossary</td>
                            </tr>
                            <tr>
                                <td className="px-4 py-2 border border-gray-700">2</td>
                                <td className="px-4 py-2 border border-gray-700">Different Data Cloud Connectors Introduction</td>
                            </tr>
                            <tr>
                                <td className="px-4 py-2 border border-gray-700">3</td>
                                <td className="px-4 py-2 border border-gray-700">Data Streams</td>
                            </tr>
                            <tr>
                                <td className="px-4 py-2 border border-gray-700">4</td>
                                <td className="px-4 py-2 border border-gray-700">Account Setup and Basic Understanding</td>
                            </tr>
                            <tr>
                                <td className="px-4 py-2 border border-gray-700">5</td>
                                <td className="px-4 py-2 border border-gray-700">Data Lake</td>
                            </tr>
                            <tr>
                                <td className="px-4 py-2 border border-gray-700">6</td>
                                <td className="px-4 py-2 border border-gray-700">Data Cloud Permissions</td>
                            </tr>
                            <tr>
                                <td className="px-4 py-2 border border-gray-700">7</td>
                                <td className="px-4 py-2 border border-gray-700">Data Explorer</td>
                            </tr>
                            <tr>
                                <td className="px-4 py-2 border border-gray-700">8</td>
                                <td className="px-4 py-2 border border-gray-700">Data Model Mappings</td>
                            </tr>
                            <tr>
                                <td className="px-4 py-2 border border-gray-700">9</td>
                                <td className="px-4 py-2 border border-gray-700">Data Transforms</td>
                            </tr>
                            <tr>
                                <td className="px-4 py-2 border border-gray-700">10</td>
                                <td className="px-4 py-2 border border-gray-700">Data Modeling</td>
                            </tr>
                            <tr>
                                <td className="px-4 py-2 border border-gray-700">11</td>
                                <td className="px-4 py-2 border border-gray-700">Data Explorer</td>
                            </tr>
                            <tr>
                                <td className="px-4 py-2 border border-gray-700">12</td>
                                <td className="px-4 py-2 border border-gray-700">Identity Resolution</td>
                            </tr>
                            <tr>
                                <td className="px-4 py-2 border border-gray-700">13</td>
                                <td className="px-4 py-2 border border-gray-700">DC Session - Identity Resolution - Part 1</td>
                            </tr>
                            <tr>
                                <td className="px-4 py-2 border border-gray-700">14</td>
                                <td className="px-4 py-2 border border-gray-700">DC Session - Identity Resolution - Part 2</td>
                            </tr>
                            <tr>
                                <td className="px-4 py-2 border border-gray-700">15</td>
                                <td className="px-4 py-2 border border-gray-700">Profile Explorer</td>
                            </tr>
                            <tr>
                                <td className="px-4 py-2 border border-gray-700">16</td>
                                <td className="px-4 py-2 border border-gray-700">Data Action</td>
                            </tr>
                            <tr>
                                <td className="px-4 py-2 border border-gray-700">17</td>
                                <td className="px-4 py-2 border border-gray-700">Data Actions - 2</td>
                            </tr>
                            <tr>
                                <td className="px-4 py-2 border border-gray-700">18</td>
                                <td className="px-4 py-2 border border-gray-700">Segmentation</td>
                            </tr>
                            <tr>
                                <td className="px-4 py-2 border border-gray-700">19</td>
                                <td className="px-4 py-2 border border-gray-700">Calculated Insights</td>
                            </tr>
                            <tr>
                                <td className="px-4 py-2 border border-gray-700">20</td>
                                <td className="px-4 py-2 border border-gray-700">DC Session - S3 Account Setup + Connector</td>
                            </tr>
                            <tr>
                                <td className="px-4 py-2 border border-gray-700">21</td>
                                <td className="px-4 py-2 border border-gray-700">DC Session - Profile Explorer | Data Explorer</td>
                            </tr>
                            <tr>
                                <td className="px-4 py-2 border border-gray-700">22</td>
                                <td className="px-4 py-2 border border-gray-700">DC Session - DC MC Connector</td>
                            </tr>
                            <tr>
                                <td className="px-4 py-2 border border-gray-700">23</td>
                                <td className="px-4 py-2 border border-gray-700">DC Session - Snowflake Connector and Setup</td>
                            </tr>
                            <tr>
                                <td className="px-4 py-2 border border-gray-700">24</td>
                                <td className="px-4 py-2 border border-gray-700">DC Session - DC MC Connector - Recap</td>
                            </tr>
                            <tr>
                                <td className="px-4 py-2 border border-gray-700">25</td>
                                <td className="px-4 py-2 border border-gray-700">DC Session - DC CRM Connector</td>
                            </tr>
                            <tr>
                                <td className="px-4 py-2 border border-gray-700">26</td>
                                <td className="px-4 py-2 border border-gray-700">DC Session - Concept Clarifications - DC Exam Readiness</td>
                            </tr>
                            <tr>
                                <td className="px-4 py-2 border border-gray-700">27</td>
                                <td className="px-4 py-2 border border-gray-700">DC Session - SFMC Connector - DFU Driver Walkthrough</td>
                            </tr>
                            <tr>
                                <td className="px-4 py-2 border border-gray-700">28</td>
                                <td className="px-4 py-2 border border-gray-700">DC Session - Party Identification Object</td>
                            </tr>
                            <tr>
                                <td className="px-4 py-2 border border-gray-700">29</td>
                                <td className="px-4 py-2 border border-gray-700">DC Session - Concept - Contact Point Objects / Party Relationship</td>
                            </tr>
                            <tr>
                                <td className="px-4 py-2 border border-gray-700">30</td>
                                <td className="px-4 py-2 border border-gray-700">DC Session - Party Identification Object</td>
                            </tr>
                            <tr>
                                <td className="px-4 py-2 border border-gray-700">31</td>
                                <td className="px-4 py-2 border border-gray-700">DC Session - Concept - Fully Qualified Keys</td>
                            </tr>
                            <tr>
                                <td className="px-4 py-2 border border-gray-700">32</td>
                                <td className="px-4 py-2 border border-gray-700">DC Session Simplified - Calculated Insights</td>
                            </tr>
                            <tr>
                                <td className="px-4 py-2 border border-gray-700">33</td>
                                <td className="px-4 py-2 border border-gray-700">DC Session - Google Cloud Python Connector</td>
                            </tr>
                            <tr>
                                <td className="px-4 py-2 border border-gray-700">34</td>
                                <td className="px-4 py-2 border border-gray-700">DC Certificate Readiness</td>
                            </tr>
                            <tr>
                                <td className="px-4 py-2 border border-gray-700">35</td>
                                <td className="px-4 py-2 border border-gray-700">DC Dbeaver Integrations</td>
                            </tr>
                            <tr>
                                <td className="px-4 py-2 border border-gray-700">36</td>
                                <td className="px-4 py-2 border border-gray-700">Tech Deepdive - Segment Intelligence</td>
                            </tr>
                            <tr>
                                <td className="px-4 py-2 border border-gray-700">37</td>
                                <td className="px-4 py-2 border border-gray-700"> Tech Deepdive - Enhanced Data Security</td>
                            </tr>
                            <tr>
                                <td className="px-4 py-2 border border-gray-700">38</td>
                                <td className="px-4 py-2 border border-gray-700">  Tech Deepdive - Einstein Platform | Model Builder</td>
                            </tr>
                            <tr>
                                <td className="px-4 py-2 border border-gray-700">38</td>
                                <td className="px-4 py-2 border border-gray-700">  Tech Deepdive - Einstein Platform | Model Builder</td>
                            </tr>
                            <tr>
                                <td className="px-4 py-2 border border-gray-700">39</td>
                                <td className="px-4 py-2 border border-gray-700">   DC Support - Google BigQuery Datashare Hands-On</td>
                            </tr>
                            <tr>
                                <td className="px-4 py-2 border border-gray-700">40</td>
                                <td className="px-4 py-2 border border-gray-700">  DC Support - Connect SFTP to Data Cloud [Hands-On]</td>
                            </tr>
                            <tr>
                                <td className="px-4 py-2 border border-gray-700">41</td>
                                <td className="px-4 py-2 border border-gray-700">  DC Session - Cartesian Join</td>
                            </tr>
                            <tr>
                                <td className="px-4 py-2 border border-gray-700">42</td>
                                <td className="px-4 py-2 border border-gray-700">  DC - Ingestion API | End-to-end Implementation</td>
                            </tr>
                            <tr>
                                <td className="px-4 py-2 border border-gray-700">43</td>
                                <td className="px-4 py-2 border border-gray-700">  DATA CLOUD WRAP UP</td>
                            </tr>
                            <tr>
                                <td className="px-4 py-2 font-bold border border-gray-700 text-center" colSpan="2">Total Days</td>
                                <td className="px-4 py-2 font-bold border border-gray-700">{totalDataCloudDays}</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            )}
        </div>
    );
};

export default Salesforce;
