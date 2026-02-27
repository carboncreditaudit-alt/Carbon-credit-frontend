import React, { useState } from 'react';
import {
  CRow,
  CCol,
  CCard,
  CCardBody,
  CCardHeader,
  CButton,
  CFormInput,
  CTable,
  CTableBody,
  CTableRow,
  CTableHeaderCell,
  CTableDataCell,
  CBadge,
  CInputGroup,
  CInputGroupText
} from '@coreui/react';
import CIcon from '@coreui/icons-react';
import { cilSearch, cilPencil, cilTrash } from '@coreui/icons';

const Companies = () => {
  const [search, setSearch] = useState('');

  const companies = [
    { id: 1, name: 'EcoCorp Industries', regNumber: 'CIN/2023/123', phone: '9876543200', industry: 'Technology', status: 'active', joined: '2023-12-15' },
    { id: 2, name: 'Sustainable Solutions Ltd', regNumber: 'CIN/2024/456', phone: '9876543201', industry: 'Manufacturing', status: 'active', joined: '2024-01-10' },
    { id: 3, name: 'GreenTech Innovations', regNumber: 'CIN/2024/789', phone: '9876543202', industry: 'Technology', status: 'pending', joined: '2024-02-05' },
    { id: 4, name: 'Carbon Neutral Inc', regNumber: 'CIN/2023/234', phone: '9876543203', industry: 'Finance', status: 'active', joined: '2023-11-20' },
    { id: 5, name: 'Future Energy Corp', regNumber: 'CIN/2024/567', phone: '9876543204', industry: 'Energy', status: 'active', joined: '2024-01-25' },
    { id: 6, name: 'Eco Logistics', regNumber: 'CIN/2023/890', phone: '9876543205', industry: 'Transportation', status: 'inactive', joined: '2023-10-15' },
  ];

  const filteredCompanies = companies.filter(company => 
    company.name.toLowerCase().includes(search.toLowerCase()) ||
    company.regNumber.toLowerCase().includes(search.toLowerCase()) ||
    company.industry.toLowerCase().includes(search.toLowerCase())
  );

  const getStatusColor = (status) => {
    switch(status) {
      case 'active': return 'success';
      case 'pending': return 'warning';
      case 'inactive': return 'secondary';
      default: return 'secondary';
    }
  };

  return (
    <>
      <CRow className="mb-4">
        <CCol>
          <h4 style={{ color: '#344e41' }}>Companies Management</h4>
        </CCol>
        <CCol xs="auto">
          <CButton color="primary" style={{ backgroundColor: '#588157', borderColor: '#588157' }}>
            + Add New Company
          </CButton>
        </CCol>
      </CRow>

      <CRow className="mb-4">
        <CCol md={6}>
          <CInputGroup>
            <CInputGroupText style={{ backgroundColor: 'white', borderColor: '#dad7cd' }}>
              <CIcon icon={cilSearch} />
            </CInputGroupText>
            <CFormInput
              placeholder="Search companies..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              style={{ borderColor: '#dad7cd' }}
            />
          </CInputGroup>
        </CCol>
      </CRow>

      <CCard>
        <CCardHeader style={{ backgroundColor: 'white', borderBottom: '2px solid #dad7cd' }}>
          <strong>Companies List</strong>
        </CCardHeader>
        <CCardBody>
          <CTable hover responsive>
            <thead>
              <tr>
                <CTableHeaderCell>Company</CTableHeaderCell>
                <CTableHeaderCell>Reg Number</CTableHeaderCell>
                <CTableHeaderCell>Phone</CTableHeaderCell>
                <CTableHeaderCell>Industry</CTableHeaderCell>
                <CTableHeaderCell>Status</CTableHeaderCell>
                <CTableHeaderCell>Joined</CTableHeaderCell>
                <CTableHeaderCell>Actions</CTableHeaderCell>
              </tr>
            </thead>
            <CTableBody>
              {filteredCompanies.map(company => (
                <CTableRow key={company.id}>
                  <CTableDataCell style={{ fontWeight: '500', color: '#344e41' }}>{company.name}</CTableDataCell>
                  <CTableDataCell>{company.regNumber}</CTableDataCell>
                  <CTableDataCell>{company.phone}</CTableDataCell>
                  <CTableDataCell>{company.industry}</CTableDataCell>
                  <CTableDataCell>
                    <CBadge color={getStatusColor(company.status)} shape="rounded-pill" className="px-3 py-1">
                      {company.status}
                    </CBadge>
                  </CTableDataCell>
                  <CTableDataCell className="text-muted">{company.joined}</CTableDataCell>
                  <CTableDataCell>
                    <CButton color="light" size="sm" className="me-2" title="View">
                      {/* <CIcon icon={cilEye} /> */}
                    </CButton>
                    <CButton color="light" size="sm" className="me-2" title="Edit">
                      <CIcon icon={cilPencil} />
                    </CButton>
                    <CButton color="light" size="sm" title="Delete">
                      <CIcon icon={cilTrash} />
                    </CButton>
                  </CTableDataCell>
                </CTableRow>
              ))}
            </CTableBody>
          </CTable>

          {filteredCompanies.length === 0 && (
            <div className="text-center py-5">
              <div className="mb-3" style={{ fontSize: '3rem' }}>🏢</div>
              <h5>No companies found</h5>
              <p className="text-medium-emphasis">Try adjusting your search</p>
            </div>
          )}
        </CCardBody>
      </CCard>
    </>
  );
};

export default Companies;