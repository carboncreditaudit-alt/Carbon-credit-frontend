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
import { cilSearch, cilPencil, cilTrash, cilUserPlus } from '@coreui/icons';

const Farmers = () => {
  const [search, setSearch] = useState('');

  const farmers = [
    { id: 1, name: 'Rajesh Kumar', village: 'Village A', phone: '9876543210', projects: 3, status: 'active', joined: '2024-01-15' },
    { id: 2, name: 'Priya Sharma', village: 'Village B', phone: '9876543211', projects: 2, status: 'active', joined: '2024-02-01' },
    { id: 3, name: 'Amit Patel', village: 'Village C', phone: '9876543212', projects: 4, status: 'pending', joined: '2024-01-20' },
    { id: 4, name: 'Lakshmi Reddy', village: 'Village D', phone: '9876543213', projects: 1, status: 'active', joined: '2024-02-10' },
    { id: 5, name: 'Suresh Yadav', village: 'Village E', phone: '9876543214', projects: 2, status: 'active', joined: '2024-02-15' },
    { id: 6, name: 'Meena Kumari', village: 'Village F', phone: '9876543215', projects: 3, status: 'inactive', joined: '2024-01-25' },
  ];

  const filteredFarmers = farmers.filter(farmer => 
    farmer.name.toLowerCase().includes(search.toLowerCase()) ||
    farmer.village.toLowerCase().includes(search.toLowerCase()) ||
    farmer.phone.includes(search)
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
          <h4 style={{ color: '#344e41' }}>Farmers Management</h4>
        </CCol>
        <CCol xs="auto">
          <CButton color="primary" style={{ backgroundColor: '#588157', borderColor: '#588157' }}>
            <CIcon icon={cilUserPlus} className="me-2" />
            Add New Farmer
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
              placeholder="Search farmers..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              style={{ borderColor: '#dad7cd' }}
            />
          </CInputGroup>
        </CCol>
      </CRow>

      <CCard>
        <CCardHeader style={{ backgroundColor: 'white', borderBottom: '2px solid #dad7cd' }}>
          <strong>Farmers List</strong>
        </CCardHeader>
        <CCardBody>
          <CTable hover responsive>
            <thead>
              <tr>
                <CTableHeaderCell>Name</CTableHeaderCell>
                <CTableHeaderCell>Village</CTableHeaderCell>
                <CTableHeaderCell>Phone</CTableHeaderCell>
                <CTableHeaderCell>Projects</CTableHeaderCell>
                <CTableHeaderCell>Status</CTableHeaderCell>
                <CTableHeaderCell>Joined</CTableHeaderCell>
                <CTableHeaderCell>Actions</CTableHeaderCell>
              </tr>
            </thead>
            <CTableBody>
              {filteredFarmers.map(farmer => (
                <CTableRow key={farmer.id}>
                  <CTableDataCell style={{ fontWeight: '500', color: '#344e41' }}>{farmer.name}</CTableDataCell>
                  <CTableDataCell>{farmer.village}</CTableDataCell>
                  <CTableDataCell>{farmer.phone}</CTableDataCell>
                  <CTableDataCell>{farmer.projects}</CTableDataCell>
                  <CTableDataCell>
                    <CBadge color={getStatusColor(farmer.status)} shape="rounded-pill" className="px-3 py-1">
                      {farmer.status}
                    </CBadge>
                  </CTableDataCell>
                  <CTableDataCell className="text-muted">{farmer.joined}</CTableDataCell>
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

          {filteredFarmers.length === 0 && (
            <div className="text-center py-5">
              <div className="mb-3" style={{ fontSize: '3rem' }}>👨‍🌾</div>
              <h5>No farmers found</h5>
              <p className="text-medium-emphasis">Try adjusting your search</p>
            </div>
          )}
        </CCardBody>
      </CCard>
    </>
  );
};

export default Farmers;