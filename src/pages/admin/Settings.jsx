import React, { useState } from 'react';
import {
  CRow,
  CCol,
  CCard,
  CCardBody,
  CCardHeader,
  CButton,
  CFormInput,
  CFormLabel,
  CFormCheck,
  CCardGroup
} from '@coreui/react';
import CIcon from '@coreui/icons-react';
import { cilSave, cilSettings } from '@coreui/icons';

const Settings = () => {
  const [settings, setSettings] = useState({
    siteName: 'Carbon Credit Platform',
    adminEmail: 'admin@carboncredit.com',
    approvalRequired: true,
    autoVerification: false,
    notifyOnRegistration: true,
    notifyOnApproval: true,
    maintenanceMode: false
  });

  const handleToggle = (key) => {
    setSettings(prev => ({
      ...prev,
      [key]: !prev[key]
    }));
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setSettings(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSave = () => {
    alert('Settings saved successfully!');
  };

  return (
    <>
      <CRow className="mb-4">
        <CCol>
          <h4 style={{ color: '#344e41' }}>
            <CIcon icon={cilSettings} className="me-2" />
            System Settings
          </h4>
        </CCol>
      </CRow>

      <CRow xs={{ gutter: 4 }}>
        <CCol md={6}>
          <CCard className="mb-4">
            <CCardHeader style={{ backgroundColor: 'white', borderBottom: '2px solid #dad7cd' }}>
              <strong>General Settings</strong>
            </CCardHeader>
            <CCardBody>
              <div className="mb-3">
                <CFormLabel style={{ color: '#344e41', fontWeight: '500' }}>Site Name</CFormLabel>
                <CFormInput
                  name="siteName"
                  value={settings.siteName}
                  onChange={handleInputChange}
                  style={{ borderColor: '#dad7cd' }}
                />
              </div>

              <div className="mb-3">
                <CFormLabel style={{ color: '#344e41', fontWeight: '500' }}>Admin Email</CFormLabel>
                <CFormInput
                  name="adminEmail"
                  type="email"
                  value={settings.adminEmail}
                  onChange={handleInputChange}
                  style={{ borderColor: '#dad7cd' }}
                />
              </div>
            </CCardBody>
          </CCard>

          <CCard className="mb-4">
            <CCardHeader style={{ backgroundColor: 'white', borderBottom: '2px solid #dad7cd' }}>
              <strong>Approval Settings</strong>
            </CCardHeader>
            <CCardBody>
              <CFormCheck
                id="approvalRequired"
                label="Require admin approval for new users"
                checked={settings.approvalRequired}
                onChange={() => handleToggle('approvalRequired')}
                className="mb-3"
              />
              <CFormCheck
                id="autoVerification"
                label="Auto-verify trusted organizations"
                checked={settings.autoVerification}
                onChange={() => handleToggle('autoVerification')}
                className="mb-3"
              />
            </CCardBody>
          </CCard>
        </CCol>

        <CCol md={6}>
          <CCard className="mb-4">
            <CCardHeader style={{ backgroundColor: 'white', borderBottom: '2px solid #dad7cd' }}>
              <strong>Notification Settings</strong>
            </CCardHeader>
            <CCardBody>
              <CFormCheck
                id="notifyOnRegistration"
                label="Email on new registration"
                checked={settings.notifyOnRegistration}
                onChange={() => handleToggle('notifyOnRegistration')}
                className="mb-3"
              />
              <CFormCheck
                id="notifyOnApproval"
                label="Email on approval/rejection"
                checked={settings.notifyOnApproval}
                onChange={() => handleToggle('notifyOnApproval')}
                className="mb-3"
              />
            </CCardBody>
          </CCard>

          <CCard className="mb-4">
            <CCardHeader style={{ backgroundColor: 'white', borderBottom: '2px solid #dad7cd' }}>
              <strong>System Status</strong>
            </CCardHeader>
            <CCardBody>
              <CFormCheck
                id="maintenanceMode"
                label="Maintenance Mode"
                checked={settings.maintenanceMode}
                onChange={() => handleToggle('maintenanceMode')}
                className="mb-4"
              />

              <CButton
                color="primary"
                className="w-100"
                style={{ backgroundColor: '#588157', borderColor: '#588157' }}
                onClick={handleSave}
              >
                <CIcon icon={cilSave} className="me-2" />
                Save Settings
              </CButton>
            </CCardBody>
          </CCard>
        </CCol>
      </CRow>
    </>
  );
};

export default Settings;